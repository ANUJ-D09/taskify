function tasks() {
    const text = document.getElementById("text").value;
    const dateis = document.getElementById("date").value;
    const priorityis = document.getElementById("priority").value;
    const display = document.getElementById("taskdisplay");

    const newtask = document.createElement("div");
    newtask.classList.add("task-card");
    const taskId = "task-" + Date.now(); // unique ID
    newtask.id = taskId;
    newtask.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", taskId);
    });


    newtask.innerHTML =


        `
      <div class="task-details" draggable="true">
        <p><strong>Task:</strong> ${text}</p>
        <p><strong>Due Date:</strong> ${dateis}</p>
        <p><strong>Priority:</strong> ${priorityis}</p>
      </div>
    `;

    display.appendChild(newtask);

}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const taskCard = document.getElementById(taskId);
    event.currentTarget.querySelector(".taskdisplay").appendChild(taskCard);
}