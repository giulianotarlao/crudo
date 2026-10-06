document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  const playBtn = document.querySelector('.play-btn');
  const progressBar = document.querySelector('.progress-bar');
  const progress = document.querySelector('.progress');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playBtn.textContent = 'Pause';
      } else {
        audio.pause();
        playBtn.textContent = 'Play';
      }
    });
  }

  if (audio) {
    audio.addEventListener('timeupdate', () => {
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = `${percent}%`;
    });

    progressBar.addEventListener('click', (e) => {
      const clickX = e.offsetX;
      const width = progressBar.clientWidth;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
    });
  }
});