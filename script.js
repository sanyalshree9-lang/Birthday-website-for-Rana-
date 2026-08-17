const button = document.getElementById('celebrateBtn');
const song = document.getElementById('birthdaySong');

button.addEventListener('click', () => {
  // Play celebration song
  song.play();

  // Burst main confetti
  confetti({
    particleCount: 180,
    spread: 100,
    origin: { y: 0.6 }
  });

  // Continuous celebratory side cannons for 4 seconds
  const duration = 4000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
});
