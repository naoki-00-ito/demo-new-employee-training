import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import loading from '@/data/loading';

type Args = {
  ref: MutableRefObject<null>;
};

const useLoading = ({ ref }: Args) => {
  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;
      gsap.to(ref.current, {
        delay: loading,
        autoAlpha: 0,
        y: 50,
      });
    }
  });
};

export default useLoading;
