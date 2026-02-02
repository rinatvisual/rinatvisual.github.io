document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        const resume = () => {
          video.play().catch(() => {});
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };

        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      });
    }
  });
});
