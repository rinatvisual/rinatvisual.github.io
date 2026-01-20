document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  videos.forEach(video => {
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata"; // ⬅️ КЛЮЧ
    observer.observe(video);
  });
});
