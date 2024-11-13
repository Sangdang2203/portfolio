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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="text-white w-8 h-8  hover:text-yellow-500"
        >
          <path
            fill="currentColor"
            d="M7.823 1.677L4.927 4.573A.25.25 0 0 0 5.104 5H7.25v3.236a.75.75 0 1 0 1.5 0V5h2.146a.25.25 0 0 0 .177-.427L8.177 1.677a.25.25 0 0 0-.354 0M13.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm-3.75.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M7.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM4 11.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75M1.75 11a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
          />
        </svg>
      </IconButton>
    </>
  );
}
