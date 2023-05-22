import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  return useEffect(() => {
    window.scrollTo(0, 0);

    return () => null;
  }, [pathname]);
};

export default ScrollToTop;
