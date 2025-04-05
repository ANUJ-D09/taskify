function tasks() {
    const text = document.getElementById("text").value;
    const dateis = document.getElementById("date").value;
    const priorityis = document.getElementById("priority").value;
    const display = document.getElementById("taskdisplay");

    const newtask = document.createElement("div");
    newtask.classList.add("task-card");

    newtask.innerHTML = `
      <div class="task-details">
        <p><strong>Task:</strong> ${text}</p>
        <p><strong>Due Date:</strong> ${dateis}</p>
        <p><strong>Priority:</strong> ${priorityis}</p>
      </div>
    `;

    display.appendChild(newtask);

}