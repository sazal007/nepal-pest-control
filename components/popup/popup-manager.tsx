"use client";

import React, { useState, useEffect, useRef } from "react";
import { useActivePopup } from "@/hooks/use-popup";

import Popup from "./popup";

const POPUP_STORAGE_KEY = "popup_shown_date";

const PopupManager: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { data: popupData, isLoading } = useActivePopup();
  const scrollTimer = useRef<NodeJS.Timeout | null>(null);
  const initialTimer = useRef<NodeJS.Timeout | null>(null);
  const showPopupRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Keep ref in sync with state
  useEffect(() => {
    showPopupRef.current = showPopup;
  }, [showPopup]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const checkIfShouldShowPopup = () => {
    if (typeof window === "undefined") return false;
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem(POPUP_STORAGE_KEY);
    return lastShown !== today;
  };

  const markPopupAsShown = () => {
    if (typeof window === "undefined") return;
    const today = new Date().toDateString();
    localStorage.setItem(POPUP_STORAGE_KEY, today);
  };

  useEffect(() => {
    // Only proceed if we have popup data and it's active
    if (isLoading || !popupData || !popupData.is_active || showPopup) {
      return;
    }

    // Check if popup should be shown
    if (!checkIfShouldShowPopup()) {
      return;
    }

    const handleScroll = () => {
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }

      // Shorter delay for mobile devices
      const delay = isMobile ? 3000 : 5000;

      scrollTimer.current = setTimeout(() => {
        if (!showPopupRef.current) {
          setShowPopup(true);
          markPopupAsShown();
          showPopupRef.current = true;
        }
      }, delay);
    };

    // Show popup after initial delay on page load
    const delay = isMobile ? 3000 : 5000;
    initialTimer.current = setTimeout(() => {
      if (!showPopupRef.current) {
        setShowPopup(true);
        markPopupAsShown();
        showPopupRef.current = true;
      }
    }, delay);

    // Also show on scroll with delay
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (initialTimer.current) {
        clearTimeout(initialTimer.current);
        initialTimer.current = null;
      }
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
        scrollTimer.current = null;
      }
    };
  }, [showPopup, isMobile, popupData, isLoading]);

  const handleClosePopup = () => {
    setShowPopup(false);
    if (scrollTimer.current) {
      clearTimeout(scrollTimer.current);
      scrollTimer.current = null;
    }
  };

  // Don't render anything if loading, no popup data, or popup is not active
  if (isLoading || !popupData || !popupData.is_active) {
    return null;
  }

  return <Popup open={showPopup} onClose={handleClosePopup} />;
};

export default PopupManager;
