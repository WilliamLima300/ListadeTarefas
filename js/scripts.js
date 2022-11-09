//Selecionar elementos que irão fazer a ação

const inputElement = document.querySelector(".new-task-input");

const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container")
//constante para armezenar o valor do input

const inputValue = inputElement.value.trim()

//Validação do input

const validateInput = () => {
    let i = inputElement.value.trim();
    
    return i.length > 0;
    
};



const handleAddTask = () => {

    const inputIsValid = validateInput();
    // Adicionar erro caso input esteja vazio
    if(!inputIsValid){
        return inputElement.classList.add("error");
    };

    //adicionar container de novas tarefas via JavaScript
    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-item');

    const taskContent = document.createElement('p');

    taskContent.innerText = inputElement.value;

    taskContent.addEventListener("click", () => handleClick(taskContent));

    const deleteItem = document.createElement('i');
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");

    deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);

    tasksContainer.appendChild(taskItemContainer);

    inputElement.value = "";

};

//função para concluir tarefa

const handleClick = (taskContent) =>{
    const tasks = tasksContainer.childNodes;

    for(const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)){
            task.firstChild.classList.toggle("completed");
        }
    }
};

//função para deletar tarefa

const handleDeleteClick = (taskItemContainer,taskContent) =>{
    const tasks = tasksContainer.childNodes;

    for(const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)){
            taskItemContainer.remove();
        }
    }
};



// retirar erro caso a pessoa digite algo no imput
const handleInputChange = () => {
    const inputIsValid = validateInput();
  
    if (inputIsValid) {
      return inputElement.classList.remove("error");
    }
  };


addTaskButton.addEventListener("click",()=> handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());
