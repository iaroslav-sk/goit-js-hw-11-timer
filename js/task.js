const refs = {
  daysContent: document.querySelector('[data-value="days"]'),
  hoursContent: document.querySelector('[data-value="hours"]'),
  minsContent: document.querySelector('[data-value="mins"]'),
  secsContent: document.querySelector('[data-value="secs"]'),
};

const timer = {
  start() {
    transformTime(0);
    const targetDate = new Date('Mar 18, 2021');
    setInterval(() => {
      const currentTime = Date.now();
      const fullTime = targetDate - currentTime;
      if (targetDate <= currentTime) {
        transformTime(0);
        return;
      }
      transformTime(fullTime);
    }, 1000);
  },
};

timer.start();

function transformTime(time) {
  refs.daysContent.textContent = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  refs.hoursContent.textContent = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  refs.minsContent.textContent = pad(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
  );

  refs.secsContent.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
}
function pad(value) {
  return String(value).padStart(2, '0');
}
