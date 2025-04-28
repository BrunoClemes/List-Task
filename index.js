function exibirTexto() {
const texto = document.getElementById('taskInput').value; 
if (texto.trim() !== '') { 
    const taskList = document.getElementById('taskList');
    
   
    const taskItem = document.createElement('div');
    taskItem.style.display = 'flex'; 
    
    const newTask = document.createElement('p'); 
    newTask.innerText = texto; 
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'X'; 
    removeButton.className = 'remove-button'; 
    removeButton.onclick = function() {
        taskList.removeChild(taskItem); 
    };

    const ButtonConcluido = document.createElement('button'); 
    ButtonConcluido.innerText = 'V';
    ButtonConcluido.className = 'concluido'; 
    ButtonConcluido.onclick = function() {
        newTask.style.color = 'green'; 
        newTask.style.textDecoration = 'line-through'; 
        ButtonConcluido.disabled = true; 
    };

    taskItem.appendChild(newTask);
    taskItem.appendChild(ButtonConcluido);
    taskItem.appendChild(removeButton);
    
  
    taskList.appendChild(taskItem);
    
    document.getElementById('taskInput').value = ''; 
}
}