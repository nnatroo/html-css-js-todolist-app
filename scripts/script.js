const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  // Add task text
  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  taskItem.appendChild(taskTextSpan);

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
  taskItem.appendChild(deleteBtn);

  // Add complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });
  taskItem.appendChild(completeBtn);

  // Add the task to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
