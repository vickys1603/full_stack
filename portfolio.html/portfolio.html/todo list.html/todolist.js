document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;
        
        // Add click event to mark task as completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        
        document.getElementById('taskList').appendChild(li);
        taskInput.value = ''; // Clear input after adding
    }
});
