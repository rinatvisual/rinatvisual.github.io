document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.muted = true;
    video.playsInline = true;

    const attemptPlay = video.play();

    if (attemptPlay !== undefined) {
      attemptPlay.catch(() => {
        const resume = () => {
          video.play();
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };

        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      });
    }
  });
});
