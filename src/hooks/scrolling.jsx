import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useSmoothScroll = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"), // Target the main container
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Adjust inertia (0–1, lower is slower, higher is faster)
      multiplier: 1, // Control scroll sensitivity (set back to default to avoid breaking sticky behavior)
      smoothMobile: true, // Enable smooth scrolling on mobile devices
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      resetNativeScroll: true, // Ensure native scrolling properties are reset
      scrollbarContainer: document.querySelector("[data-scroll-container]"), // Ensure scrollbar syncs with the scroll container
    });

    // Refresh Locomotive Scroll after images or fonts load to fix disappearing content
    setTimeout(() => {
      scroll.update();
    }, 100);

    // Listen for scroll updates to keep scrollbar in sync
    scroll.on("scroll", () => {
      scroll.update();
    });

    return () => {
      scroll.destroy(); // Cleanup on unmount
    };
  }, []);
};

export default useSmoothScroll;
