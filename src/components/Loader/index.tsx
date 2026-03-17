'use client';

import './style.scss';

import React, { memo, useState, useEffect } from 'react';
import { LoadingOverlay } from '@achmadk/react-loading-overlay';

import useSWR from 'swr';

interface LoaderProps {
  className?: string;
  id?: string;
  loading?: boolean;
  children?: React.ReactNode;
}

interface LoaderState {
  componentId: string;
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ className, children, loading, id }) => {
  const { data: loaderState } = useSWR<LoaderState>(COMMON_LOADING, null);
  const [innerLoading, setInnerLoading] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (loaderState && id && loaderState.componentId === id) {
      setInnerLoading(loaderState.loading);
    }
  }, [id, loaderState]);
  return (
    <LoadingOverlay
      styles={{
        overlay: state => ({
          ...state,
        }),
      }}
      className={className}
      spinner={<Preload />}
      active={loading || innerLoading}
    >
      {children}
    </LoadingOverlay>
  );
};

export default memo<React.FC<LoaderProps>>(Loader);
