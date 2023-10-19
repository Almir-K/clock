const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
const clock = document.querySelector(".clock");

let gradientOffset = 0;
let currentColorIndex = 0;
let isIncreasing = true;

function updateClock() {
  const now = new Date();

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourAngle = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondAngle = (360 / 60) * seconds;

  hourElement.style.transform = `rotate(${hourAngle}deg)`;
  minuteElement.style.transform = `rotate(${minuteAngle}deg)`;
  secondElement.style.transform = `rotate(${secondAngle}deg)`;

  // Change the background color smoothly every second
  gradientOffset += isIncreasing ? 1 : -1; // Adjust the speed of color change here

  if (gradientOffset >= 100) {
    isIncreasing = false;
  } else if (gradientOffset <= 0) {
    isIncreasing = true;
    currentColorIndex = (currentColorIndex + 3) % colors.length;
  }

  const colors = ["#D0E8F2", "#C0D9E7", "#A9CEE0", "#A0C6DC", "#87B9D3"];

  const currentColor = colors[currentColorIndex];
  const nextColorIndex = (currentColorIndex + 1) % colors.length;
  const nextColor = colors[nextColorIndex];

  // Create a gradient with smooth transition
  const gradient = `linear-gradient(to bottom right, ${currentColor} ${gradientOffset}%, ${nextColor} ${
    gradientOffset + 5
  }%)`;

  clock.style.background = gradient;
}

setInterval(updateClock, 50);

updateClock();
