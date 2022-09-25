import { useEffect } from "react";

export const useClickOutside = (wrapperRef, callback) => {
  useEffect(() => {
    if (!wrapperRef.current) return;
    const handleClickOutside = (event) => {
      if (!wrapperRef.current.contains(event.target)) {
        callback?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, wrapperRef]);
};
