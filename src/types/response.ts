export interface RestError {
  status?: number;
  code?: string;
  message?: string;
  messageParams?: Record<string, unknown>;
}

export type RestResponse<T = Record<string, unknown>> = RestError & {
  payload?: T;
};
