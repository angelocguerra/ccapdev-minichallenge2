/* 
    Complete the JavaScript file below.
    You have full control over this JavaScript file.
    You may use jQuery or stick with vanilla JavaScript. 
*/

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

// TODO: Write the code for the `Toggle Mark as Done` functionality

// TODO, BONUS: Write the code for the `Sort Task by ..` functionality