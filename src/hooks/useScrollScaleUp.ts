import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Args = {
  ref: MutableRefObject<null>;
  imageRef: MutableRefObject<null>;
  textRef: MutableRefObject<null>;
};

const useScrollScaleUp = ({ ref, imageRef, textRef }: Args) => {
  gsap.registerPlugin(ScrollTrigger);

  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;

      const effect = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: '+=900',
          scrub: true,
          pin: true,
        },
      });

      effect.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.2,
        },
        { opacity: 1, scale: 1, ease: 'Power4.out' },
      );

      effect.fromTo(
        textRef.current,
        {
          opacity: 0,
          scale: 0.2,
          rotate: '-45deg',
        },
        { opacity: 1, scale: 1, rotate: 0, ease: 'easeOut' },
      );
    }
  });
};

export default useScrollScaleUp;
