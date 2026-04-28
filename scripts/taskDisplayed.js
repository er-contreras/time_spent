// Task to be completed today
const task = [
  "book1",
  "project1",
  "book2",
  "project2"
];

let htmlBuffer = "";
let taskDiv = document.querySelector(".tasks");

function taskDisplayed() {
  for (let i = 0; i < task.length; i++) {
    htmlBuffer += `
      <div class="task-item">
        <span class="status-marker">[ ]</span> ${task[i]}
      </div>`;
  }

  taskDiv.innerHTML = htmlBuffer;
}

taskDisplayed();
