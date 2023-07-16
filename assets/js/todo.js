// let tasks = ["kitap okumak" , "resim çizmek"];



// for(const task of tasks) {
//     if(newTasks.indexOf(task) > -1) {
//         let newtask = prompt("Task girin")
//         newTasks.push(newtask)
//         continue;
//     }
//     newTasks.push(task);
// }

// console.log(tasks)

// const todos = [
//     {
//         todo: "köpeğe yemeği koymak",
//         isCompleted: false
//     },
//     {
//         todo: "kediye yemeği koymak",
//         isCompleted: false
//     }
// ];


// function listTodos () {
//     for (const todo of todos) {
//         console.log(`todo: ${todo.todo} || yapıldı mı: ${todo.isCompleted}`)
//     }
// }

// function addTodo(newTodo) {
//     return todo.push(newTodo);
// }

// Todos
const todos = [
  {
    id: 0,
    todo: 'Kediye yemeği koymak',
    isCompleted: false,
  },
  {
    id: 1,
    todo: 'Köpek yemeği koymak',
    isCompleted: false,
  },
  {
    id: 2,
    todo: 'Hamstere yemeği koymak',
    isCompleted: true,
  },
  {
    id: 3,
    todo: 'Aslana yemeği koymak',
    isCompleted: true,
  },
];
  
  
function listTodos() {
  for (const todo of todos) {
    console.log(`id: ${todo.id} | todo: ${todo.todo} || yapıldı Mı: ${todo.isCompleted ? 'Yapıldı' : 'Yapılmadı'}`);
  }
    return 'Ogrenciler Listelendi';
}
  
function deleteTodo(id) {
  for (const todo of todos) {
    if (todo.id === id) {
     return todos.splice(todos.indexOf(todo), 1);
    }
  }
}
  
function editTodo(id, editTodo = null, isCompleted = false) {
  for (const todo of todos) {
    if (todo.id === id) {
      return (
        todo.todo = editTodo ? editTodo : todo.todo, 
        todo.isCompleted = isCompleted
      );
    }
  }
}
  
function listCompletedTodos() {
  for (const todo of todos) {
    if (todo.isCompleted === true) {
      console.log(`id: ${todo.id} | todos: ${todo.todo}`);
    }
  }
    return 'Tamamlanan Todolar';
}
  
function listUnCompletedTodos() {
  for (const todo of todos) {
    if (todo.isCompleted === false) {
      console.log(`id: ${todo.id} | todos: ${todo.todo}`);
    }
  }
    return 'Tamamlanmayan Todolar';
}
  
function addTodo(id, todo, isCompleted) {
  return todos.push({
    id:Date.now(),
    todo: todo,
    isCompleted: isCompleted
  });
}
  