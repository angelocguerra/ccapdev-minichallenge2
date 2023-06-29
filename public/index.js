/* 
    Complete the JavaScript file below.
    You have full control over this JavaScript file.
    You may use jQuery or stick with vanilla JavaScript. 
*/

const errorMessage = document.querySelector("#error-message");
// Initially hide error message at the start
errorMessage.style.display = "none";

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // TODO: Write the code for the `Task Creation` functionality (FEATURE 1)
    // Get task name and priority
    const taskNameInput = document.querySelector("#taskName");
    const taskPriorityInput = document.querySelector("#taskPriority");
    const taskName = taskNameInput.value;
    const taskPriority = taskPriorityInput.value;

    // TODO: Write the code for the Input Validation functionality (FEATURE 3)
    
    // Check if task name is blank
    const errorMessage = document.querySelector("#error-message");
    if (taskName.trim() === "") { // Show Error Message if blank
      errorMessage.style.display = "block";
      return; // Terminate function
    } else { // Hide if not
      errorMessage.style.display = "none"; // Continue to create task
    }

    // Task Name
    const itemsContainer = document.querySelector("#itemsContainer");
    const newTaskItem = document.createElement("div");
    newTaskItem.classList.add("todo-item");

    // Color Label
    const colorLbl = document.createElement("div");
    colorLbl.classList.add("todo-lhs");

    // Priority Indicator
    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("todo-prio", taskPriority);
    colorLbl.appendChild(priorityDiv);

    // Task Name
    const taskNameSpan = document.createElement("span");
    taskNameSpan.classList.add("todo-task");
    taskNameSpan.textContent = taskName;
    colorLbl.appendChild(taskNameSpan);

    newTaskItem.appendChild(colorLbl);

    // Checkbox (Mark as Done)
    const markBtn = document.createElement("input");
    markBtn.classList.add("todo-markBtn");
    markBtn.type = "checkbox";
    newTaskItem.appendChild(markBtn);

    // Append new task item to items container
    itemsContainer.appendChild(newTaskItem);

    // Sort By
    const sortTodoInput = document.querySelector("#sortTodo");
    
    // Reset form to initial state
    taskNameInput.value = "";
    taskPriorityInput.value = "high";
    sortTodoInput.value = "";

});

// TODO: Write the code for the `Toggle Mark as Done` functionality (FEATURE 2)
const itemsContainer = document.querySelector("#itemsContainer");
itemsContainer.addEventListener("change", function (e) {
  if (e.target.classList.contains("todo-markBtn")) {
    const taskNameSpan = e.target.parentElement.querySelector(".todo-task");
    taskNameSpan.classList.toggle("done"); // Mark as done
  }
});

// TODO, BONUS: Write the code for the `Sort Task by ..` functionality
const sortTodoSelect = document.querySelector("#sortTodo");
sortTodoSelect.addEventListener("change", function () {
  const selectedOption = sortTodoSelect.value;

  // Get all task items
  const taskItems = Array.from(document.querySelectorAll(".todo-item"));

  if (selectedOption === "task") { // Sort task items by task name
    taskItems.sort((a, b) => {
      const taskNameA = a.querySelector(".todo-task").textContent.toLowerCase();
      const taskNameB = b.querySelector(".todo-task").textContent.toLowerCase();
      return taskNameA.localeCompare(taskNameB);
    });
  } else if (selectedOption === "priority") { // Sort task items by priority
    taskItems.sort((a, b) => {
      const priorityA = a.querySelector(".todo-prio").classList[1];
      const priorityB = b.querySelector(".todo-prio").classList[1];
      const priorityOrder = { high: 1, medium: 2, low: 3 };
      return priorityOrder[priorityA] - priorityOrder[priorityB];
    });
  } else if (selectedOption === "status") { // Sort task items by status
    taskItems.sort((a, b) => {
      const isDoneA = a.querySelector(".todo-markBtn").checked;
      const isDoneB = b.querySelector(".todo-markBtn").checked;
      return isDoneA - isDoneB;
    });
  }

  // Reorder task items based on sorted order
  const itemsContainer = document.querySelector("#itemsContainer");
  taskItems.forEach((taskItem) => {
    itemsContainer.appendChild(taskItem);
  });
});