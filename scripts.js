function addTask() {
	var taskInput = document.getElementById("taskInput");
	var taskList = document.getElementById("taskList");

	var taskText = taskInput.value.trim();

	// Check if the task is not empty
	if (taskText !== "") {
		// Check if the task is not a duplicate
		if (!isTaskDuplicate(taskText)) {
			var taskItem = document.createElement("li");
			taskItem.textContent = taskText;

			var deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.classList.add("delete-button"); // Add delete-button class
			deleteButton.onclick = function () {
				taskList.removeChild(taskItem);
			};

			var completeButton = document.createElement("button");
			completeButton.textContent = "Complete";
			completeButton.classList.add("complete-button"); // Add complete-button class
			completeButton.onclick = function () {
				taskItem.classList.toggle("completed");
			};

			taskItem.appendChild(deleteButton);
			taskItem.appendChild(completeButton);
			taskList.appendChild(taskItem);

			taskInput.value = "";
		} else {
			// Display alert if task is a duplicate
			alert("Task already exists in the list.");
		}
	} else {
		// Display alert if task is empty
		alert("Please enter a non-empty task.");
	}
}

function isTaskDuplicate(taskText) {
	var taskItems = document.querySelectorAll("#taskList li");

	for (var i = 0; i < taskItems.length; i++) {
		if (taskItems[i].textContent.trim() === taskText) {
			return true; // Task already exists
		}
	}

	return false; // Task is not a duplicate
}
