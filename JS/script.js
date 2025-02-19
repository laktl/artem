document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const filterBtn = document.getElementById("filter-btn");

    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim() === "") return;
        
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <span class="task-text">${taskInput.value}</span>
            <button class="complete-btn">Выполнено</button>
            <button class="delete-btn">Удалить</button>
        `;
        
        taskList.appendChild(taskItem);
        taskInput.value = "";
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains("complete-btn")) {
            e.target.parentElement.classList.toggle("completed");
        }
    });

    filterBtn.addEventListener("click", () => {
        document.querySelectorAll(".task-item").forEach(task => {
            if (task.classList.contains("completed")) {
                task.style.display = task.style.display === "none" ? "flex" : "none";
            }
        });
    });
});
