import { MutableRefObject, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Args = {
  ref: MutableRefObject<HTMLDivElement | null>;
  containrRef: MutableRefObject<HTMLDivElement | null>;
};

const useScrollSlide = ({ ref, containrRef }: Args) => {
  gsap.registerPlugin(ScrollTrigger);

  const didEffect = useRef(false);

  useLayoutEffect(() => {
    if (!didEffect.current) {
      didEffect.current = true;

      const slides = gsap.utils.toArray('.ts-scroll-slide');
      const width = ref.current?.offsetWidth;

      gsap.set(ref.current, { height: '100vh' });
      gsap.set(containrRef.current, { flexWrap: 'nowrap' });
      gsap.set(slides, { width: '300px', maxWidth: '100%', whiteSpace: 'nowrap' });

      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: `+=${width}`,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  });
};

export default useScrollSlide;
