const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event){
    event.preventDefault();
    console.log("The Button Works")


    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const complButton = document.createElement("button");
    complButton.innerHTML = "completed";
    complButton.classList.add("compl-btn");
    todoDiv.appendChild(complButton);

    const dltButton = document.createElement("button");
    dltButton.innerHTML = "delete";
    dltButton.classList.add("dlt-btn");
    todoDiv.appendChild(dltButton);

    todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(event) {
   
  const item = event.target;
  if (item.classList[0] === "dlt-btn") {
    item.parentElement.remove();
  }




}
    
    





