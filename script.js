document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  const isHoverCapable = window.matchMedia("(hover: hover)").matches;

  videos.forEach(video => {
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.pause();

    if (isHoverCapable) {
      const parent = video.closest(".card") || video;

      parent.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
      });

      parent.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
});
