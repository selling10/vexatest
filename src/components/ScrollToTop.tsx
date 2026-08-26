import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo } from "@/lib/smoothScroll";

/** Nollställer scrollpositionen vid ruttbyte, utan animerad hoppande scroll. */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo(0, true);
  }, [pathname]);

  return null;
};
