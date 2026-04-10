import useSWR from 'swr';
import { toast } from 'sonner';
import { mutate } from 'swr/_internal';
import { fetcher } from '@/lib/restApi';
import useSWRMutation from 'swr/mutation';

import type { PublicConfiguration } from 'swr/_internal';
import type { SWRMutationConfiguration } from 'swr/mutation';
import type { RestError, RestResponse } from '@/types/response';

import { METHOD } from '@/lib/global';

interface WrapperConfig<T> extends Partial<PublicConfiguration<T, RestError, (arg: string) => any>> {
  url?: string | (() => string);
  method?: METHOD;
  body?: Record<string, unknown>;
  auth?: boolean;
  enable?: boolean;
  noEndPoint?: boolean;
  extraHeader?: Record<string, string>;
  notification?: {
    title?: string;
    message?: string;
  };
  ignoreSuccessNotification?: boolean;
}

export function useSWRWrapper<T = Record<string, unknown>>(
  key: string | (() => string),
  {
    url,
    method,
    body,
    auth,
    noEndPoint,
    enable = true,
    notification,
    ignoreSuccessNotification = true,
    ...config
  }: WrapperConfig<T>,
) {
  auth = auth ?? true;

  return useSWR<T>(
    enable ? (key ?? '') : null,
    (swrKey, { signal }) => {
      const extraHeader = (body as Record<string, unknown>)?.extraHeader as Record<string, string>;

      if (!(body instanceof FormData) && body?.extraHeader) {
        delete body.extraHeader;
      }

      const header = {
        ...(auth &&
          {
            // Authorization: `Bearer ${sessionInfo?.data?.accessToken}`,
          }),
        ...extraHeader,
        ...config?.extraHeader,
      };

      const urlKey: string =
        typeof url === 'function' ? url() : url ? url : typeof key === 'function' ? key() : key;

      return new Promise((resolve, reject) => {
        // Kiểm tra signal trước khi gọi
        if (signal?.aborted) {
          reject(new Error('Request aborted'));
          return;
        }

        fetcher<T>(urlKey, method ?? METHOD.GET, body, header, noEndPoint, signal)
          .then((data: any) => {
            if (!signal?.aborted) {
              resolve(data as never);
            }
          })
          .catch((err: Error) => {
            if (!signal?.aborted) {
              reject(err as Error);
            }
          });
      });
    },
    {
      ...config,
      onError(err, swrKey) {
        const error: RestError = err as RestError;

        // Bỏ qua error nếu là abort
        if ((error as any)?.name === 'AbortError' || error?.message?.includes('aborted')) {
          return;
        }

        config?.onError?.(err, swrKey, config as never);
        if (notification) {
          toast.error(notification.title, {
            description: error?.message,
          });
        }
      },
      onSuccess(data, swrKey) {
        config?.onSuccess?.(data, swrKey, config as never);
        if (notification && !ignoreSuccessNotification) {
          toast.success(notification.title, {
            description: notification.message,
          });
        }
      },
    },
  );
}

interface MutationConfig<T> extends SWRMutationConfiguration<
  RestResponse<T>,
  RestError & Record<string, unknown>
> {
  url?: string | (() => string);
  method?: METHOD;
  componentId?: string;
  loading?: boolean;
  noEndpoint?: boolean;
  noAuth?: boolean;
  extraHeader?: Record<string, string>;
  resultKey?: string;
  notification?: {
    title?: string;
    message?: string;
  };
  ignoreSuccessNotification?: boolean;
}

export const useMutation = <T = Record<string, unknown>,>(
  key: string,
  {
    url,
    method,
    noEndpoint,
    resultKey,
    notification,
    ignoreSuccessNotification,
    ...config
  }: MutationConfig<T>,
) => {
  return useSWRMutation(
    key,
    (
      swrKey: string,
      { arg: body, signal }: { arg?: Record<string, unknown> | FormData; signal?: AbortSignal },
    ) =>
      new Promise<RestResponse<T>>((resolve, reject) => {
        if (signal?.aborted) {
          reject(new Error('Request aborted'));
          return;
        }

        const extraHeader = (body as Record<string, unknown>)?.extraHeader as Record<string, string>;

        if (!(body instanceof FormData) && body?.extraHeader) {
          delete body.extraHeader;
        }

        const urlKey = typeof url === 'function' ? url() : (url ?? key);

        fetcher<T>(
          urlKey ?? swrKey,
          method ?? METHOD.POST,
          body as Record<string, unknown>,
          config.noAuth
            ? undefined
            : {
                // ...(sessionInfo?.data?.accessToken && {
                //   Authorization: `Bearer ${sessionInfo?.data?.accessToken}`,
                // }),
                ...extraHeader,
                ...config?.extraHeader,
              },
          noEndpoint,
          signal, // Truyền signal vào fetcher
        )
          .then((data: any) => {
            if (!signal?.aborted) {
              resolve(data);
              if (resultKey) {
                mutate(resultKey, {
                  success: true,
                  response: data,
                  request: body,
                });
              }
            }
          })
          .catch((err: Error) => {
            if (!signal?.aborted) {
              reject(err as Error);
              if (resultKey) {
                mutate(resultKey, {
                  success: false,
                });
              }
            }
          })
          .finally(() => {});
      }),
    {
      onError(err, swrKey) {
        const error: RestError = err as RestError;

        // Bỏ qua error nếu là abort
        if ((error as any)?.name === 'AbortError' || error?.message?.includes('aborted')) {
          return;
        }

        console.log('Check error', error);

        config?.onError?.(err, swrKey, config as never);
        if (notification) {
          toast.error(notification.title, {
            description: error?.message,
          });
        }
      },
      onSuccess(data, swrKey) {
        config?.onSuccess?.(data, swrKey, config as never);
        if (notification && !ignoreSuccessNotification) {
          toast.success(notification.title, {
            description: notification.message,
          });
        }
      },
    },
  );
};
