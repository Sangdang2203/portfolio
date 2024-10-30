"use client";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function BackButton() {
  function scrollToTop(duration: number) {
    const start = document.documentElement.scrollTop || document.body.scrollTop;
    const startTime = performance.now();

    function scrollStep(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Tính toán vị trí cuộn mới
      const newScrollTop = start * (1 - progress);
      window.scrollTo(0, newScrollTop);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
  return (
    <>
      <IconButton onClick={() => scrollToTop(200)}>
        <KeyboardDoubleArrowUp
          color="info"
          sx={{ bgcolor: "white", borderRadius: "100%" }}
        />
      </IconButton>
    </>
  );
}
