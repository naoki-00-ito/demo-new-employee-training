import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Args = {
  ref: MutableRefObject<null>;
  delay?: number;
  invalid?: boolean;
};

const useFadeIn = ({ ref, delay, invalid }: Args) => {
  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current && !invalid) {
      didEffect.current = true;

      gsap.set(ref.current, {
        autoAlpha: 0,
        y: '70',
        scale: 0.4,
      });

      gsap.to(ref.current, {
        delay: delay ? delay : 0,
        autoAlpha: 1,
        y: 0,
        scale: 1,
        ease: 'expo.out',
        duration: 1,
      });
    }
  });
};

export default useFadeIn;
