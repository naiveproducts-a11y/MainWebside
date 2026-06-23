import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackFacebookEvent } from "../utils/facebookCapi";

/**
 * ScrollToTop component ensures the window scrolls to the top of the page
 * whenever the route (pathname) changes, and tracks page view events.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Scroll window to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant to avoid visual jumping after navigation
    });

    // 2. Track Google Ads PageView (if script loaded)
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("config", "AW-18262190254", {
        page_path: pathname,
      });
    }

    // 3. Track Facebook Conversions API PageView
    trackFacebookEvent("PageView");
  }, [pathname]);

  return null;
}

