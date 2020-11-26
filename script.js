var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
// var todos = JSON.parse(localStorage.getItem('todos')) 
// console.log(todos)
// init();
function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = 'todos.length';

  for (var i = 0; i < todos.length; i++ ) {
    var todo = todos[i];
// create li element
    var li = document.createElement("li");
    // add todo text to li
    li.innerText = todos[i]
    // add data -index attribute
    li.setAttribute('data-index', i);
    // crear button
  var button = document.createElement("button");
    button.textContent = "Complete";
    li.appendChild(button)
    // appeend li todolist
    todoList.appendChild(li);
  }
}
  
renderTodos() 
  
  function addTodo(event) {
    event.preventDefault()
    // get todoinput value
    var newTodo = todoInput.Value
    if(newTodo !== '') {
      // push value into todos
      todos.push(newTodo)
      todoInput.Value = null
      localStorage.setItem('todos', JSON.stringify(todos))
      renderTodos() 

    }
  }
  
  function removeTodo(event) {
    var target = event.target
    if (target.matches('button')) {
      // find index from LI
      var index = parseInt(target.parentNode.getAttribute('data-index'))
      // remove the todos from todos array
      todos.splice(index, 1)
      // re-render todos
      renderTodos()
      localStorage.setItem('todos', JSON.stringify(todos))

    }
  }

  todoForm.addEventListener('submit', addTodo)
  todoList.addEventListener('click', removeTodo)
  renderTodos() 

  
  
  
  
  


  // Render a new li for each todo



//     todoList.appendChild(li);
//   }
// }

// function init() {
//   // Write code here to check if there are todos in localStorage
//   // If so, parse the value from localStorage and assign it to the todos variable

//   // Render todos to the DOM
//   renderTodos();
// }

// function storeTodos() {
//   // Add code here to stringify the todos array and save it to the "todos" key in localStorage
// }

// // When form is submitted...
// todoForm.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var todoText = todoInput.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (todoText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   todos.push(todoText);
//   todoInput.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });
