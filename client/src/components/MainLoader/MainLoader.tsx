import { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RotatingLines } from 'react-loader-spinner';
import { useGetLoaderStatus } from 'src/redux/reducers/loader';

import { common } from 'src/styles/consts';

import { Backdrop } from 'src/styles/ui/container';

const modalRootElement = document.querySelector('#loader');

export const MainLoader = () => {
  const isShown = useGetLoaderStatus();

  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modalRootElement?.appendChild(element);

    return () => {
      modalRootElement?.removeChild(element);
    };
  }, [element]);

  return createPortal(
    <Backdrop $isOpen={isShown}>
      <RotatingLines
        strokeColor={common.loader.color}
        strokeWidth={common.loader.strokeWidth}
        animationDuration={common.loader.duration}
        width={common.loader.width}
        visible={true}
      />
    </Backdrop>,
    element,
  );
};
