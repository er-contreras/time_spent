// Task to be completed today
const steps = [
  "idea",
  "build",
  "deploy",
  "grow",
  "monetize",
  "automate",
  "exit"
];

let htmlBuffer = "";
let stepDiv = document.querySelector(".steps");

function stepsDisplayed() {
  for (let i = 0; i < steps.length; i++) {
    htmlBuffer += `
      <div class="step-item">
        <span class="status-marker">[ ]</span> ${steps[i]} <button>mark as ...</button>
      </div>`;
  }

  stepDiv.innerHTML = htmlBuffer;
}

stepsDisplayed();
