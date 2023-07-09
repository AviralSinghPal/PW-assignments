// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const todoList = document.getElementById('todo');
  
    // Show the skeleton loader initially
    loader.style.display = 'block';
    
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(todos => {
        loader.style.display = 'none';
        todos.forEach(todo => {

            console.log(todo?.title);
            let list = document.createElement('li');
            list.textContent = todo.title;
            todoList.appendChild(list)
        });
        // todoList.appendChild
        console.log(json);
    })
  });
  


//   .catch(error => {
//     // Handle any errors that occur during the fetch request
//     console.error('Error:', error);
//     loader.style.display = 'none';
//   }