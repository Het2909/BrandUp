import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useGsapScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const revealElements = gsap.utils.toArray('.gs_reveal');

    revealElements.forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 60 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};

export default useGsapScroll;
