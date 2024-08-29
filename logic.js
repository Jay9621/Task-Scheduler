

const taskInput = document.getElementById("Task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addtaskButton = document.getElementById("add-task");
const tasklist = document.getElementById("task-list");

addtaskButton.addEventListener("click", () => {
    const task = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    //console.log("Clicked");

    if(task === "" ){
        alert("Please add some task.");
        return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();

    if(selectedDate <= currentDate){
        alert("Please select an upcoming date for the deadline.");
        return;

    }

    const taskItem = document.createElement("div");

    taskItem.classList.add("task");
    taskItem.innerHTML = `
    <span>Task: ${task}</span>
    <span>Priority: ${priority}</span>
    <span>Deadline: ${deadline}</span>
    <button class="mark-done">Mark Done</button>
`;

    tasklist.appendChild(taskItem);

    taskInput.value = "";
    priorityInput.value = "";
    deadlineInput.value = "";

}, true);

tasklist.addEventListener("click", (e) => {
    if(e.target.classList.contains("mark-done")){
        const taskItem = e.target.parentElement;
        taskItem.classList.add("completed");
        e.target.disabled = true;
    }
});

