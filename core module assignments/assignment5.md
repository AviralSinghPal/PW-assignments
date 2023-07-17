💡 **Q.1** Synchronous and Asynchronous are two different ways of executing code in programming:

- Synchronous: In synchronous code execution, each line of code is executed one after the other, and the next line is not executed until the current line is completed. It follows a sequential order, and the program waits for each operation to finish before moving on to the next one. Synchronous code can block the execution of other code, making it less efficient for tasks that take a long time to complete.

Example of synchronous code:
```javascript
console.log("Start");
console.log("First");
console.log("Second");
console.log("End");
```
Output:
```
Start
First
Second
End
```

- Asynchronous: In asynchronous code execution, tasks are scheduled to be executed later, and the program doesn't wait for the completion of one task before moving on to the next one. It allows multiple operations to be executed in parallel, which makes it more efficient for tasks that involve waiting, such as making network requests or reading files.

Example of asynchronous code using a setTimeout function:
```javascript
console.log("Start");
setTimeout(() => console.log("Async Task"), 2000);
console.log("End");
```
Output:
```
Start
End
Async Task (after 2 seconds)
```

💡 **Q.2** Web APIs (Application Programming Interfaces) are interfaces provided by web browsers that allow web developers to interact with web features and functionalities. These APIs provide a way to access and manipulate various web-related functionalities, such as making HTTP requests, working with timers, handling events, accessing geolocation data, and more.

Some examples of Web APIs include:

- XMLHttpRequest: Used to make HTTP requests and interact with servers.
- Fetch API: A newer and more powerful API for making network requests.
- Document Object Model (DOM) API: Used to manipulate and interact with HTML elements on a webpage.
- Web Storage API: Provides a way to store key-value pairs in a web browser.
- Geolocation API: Allows access to the user's geographical location.

💡 **Q.3** `setTimeout` and `setInterval` are built-in functions in JavaScript used for asynchronous execution:

- `setTimeout`: The `setTimeout` function is used to schedule a function or an expression to run after a specified delay (in milliseconds). It executes the code only once.

Example:
```javascript
setTimeout(() => {
  console.log("Delayed message");
}, 2000); // Output: "Delayed message" after 2 seconds
```

- `setInterval`: The `setInterval` function is used to repeatedly execute a function or an expression at a specified interval (in milliseconds). It continues to execute until it is cleared with `clearInterval`.

Example:
```javascript
const intervalId = setInterval(() => {
  console.log("Repeating message");
}, 1000); // Output: "Repeating message" every 1 second

// To stop the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
```

💡 **Q.4** To handle asynchronous code in JavaScript, there are several methods:

1. Callbacks: Using callbacks is one of the traditional ways to handle asynchronous code. A callback is a function that is passed as an argument to another function and is executed after the completion of that function's task.

2. Promises: Promises are introduced in ES6 to handle asynchronous operations more effectively. A Promise is an object representing the eventual completion or failure of an asynchronous operation and allows chaining multiple asynchronous operations.

3. Async/Await: Async/Await is a modern approach to handling asynchronous code introduced in ES7 (ES2017). It provides a more synchronous way of writing asynchronous code, making it easier to read and maintain.

💡 **Q.5** Callbacks are functions that are passed as arguments to another function and are executed after the completion of that function's task. Callbacks are commonly used to handle asynchronous operations in JavaScript.

Callback Hell, also known as Pyramid of Doom, occurs when multiple asynchronous operations are nested inside each other, resulting in deeply indented code that is hard to read and maintain.

Example of callback hell:
```javascript
asyncOperation1((result1) => {
  asyncOperation2(result1, (result2) => {
    asyncOperation3(result2, (result3) => {
      // ... and so on
    });
  });
});
```

This can lead to "callback hell," making the code difficult to understand and debug. It can also cause issues with error handling.

💡 **Q.6** Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a more structured way of handling asynchronous code compared to callbacks.

Promises have three main methods:

1. `then()`: Used to handle the successful resolution of a Promise. It takes two optional callbacks: one for handling the resolved value, and the other for handling errors.

2. `catch()`: Used to handle Promise rejections (errors). It takes a single callback function that handles the error.

3. `finally()`: Used to execute code after the Promise has been settled, whether it was resolved or rejected.

Example of using Promises:
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      resolve(data); // Successful resolution
      // reject(new Error("Data not found")); // Rejection with an error
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log("Resolved:", data);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("Finally block executed");
  });
```

💡 **Q.7** `async` and `await` are keywords introduced in ES2017 (ES8) that provide a more synchronous way of writing asynchronous code. They are used together to simplify the use of Promises.

- `async`: The `async` keyword is used before a function declaration to indicate that the function will return a Promise. Inside an `async` function, you can use the `await` keyword to wait for the resolution of a Promise without blocking the rest of the code execution.

- `await`: The `await` keyword can only be used inside an `async` function.

 It waits for the Promise to resolve and returns the resolved value. If the Promise is rejected, it throws an error, which can be caught using a `try...catch` block.

Example:
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Alice" };
      resolve(data);
    }, 2000);
  });
};

const getData = async () => {
  try {
    const result = await fetchData();
    console.log("Resolved:", result);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Finally block executed");
  }
};

getData();
```

💡 **Q.8** The purpose of the `try` and `catch` blocks in JavaScript is to handle exceptions (errors) that may occur during the execution of code within the `try` block. If an exception occurs in the `try` block, the code inside the `catch` block is executed to handle the error gracefully.

Example:
```javascript
try {
  // Code that may throw an exception
  const result = someFunction();
  console.log("Result:", result);
} catch (error) {
  // Code to handle the exception
  console.log("Error:", error.message);
}
```

The `try` block contains the code that may potentially throw an exception. If an exception occurs, the code execution inside the `try` block stops, and the control jumps to the `catch` block, which handles the error.

The `catch` block takes an error object (usually named `error`) as its argument, which contains information about the error. Inside the `catch` block, you can perform error handling tasks, such as logging the error or displaying an error message to the user.

The `try...catch` mechanism is useful for preventing unhandled exceptions from crashing the entire program and allows developers to handle errors more gracefully.

💡 **Q.9** `fetch` is a built-in JavaScript function introduced in ES6 for making network requests (HTTP requests) to servers and APIs. It provides an easy and modern way to perform AJAX (Asynchronous JavaScript and XML) operations.

Example of using fetch to make a GET request:
```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
```

In the example above, `fetch` is used to make a GET request to the URL "https://api.example.com/data". The response from the server is converted to JSON format using the `response.json()` method, and the data is logged to the console.

The `.then()` method is used to handle the successful response, and the `.catch()` method is used to handle any errors that may occur during the request.

💡 **Q.10** To define an asynchronous function in JavaScript using `async/await`, you need to use the `async` keyword before the function declaration. This allows the function to return a Promise implicitly.

Example:
```javascript
async function getData() {
  // Asynchronous operations using await
  try {
    const result = await fetch("https://api.example.com/data");
    const data = await result.json();
    console.log("Data:", data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getData();
```

In the example above, `getData` is an asynchronous function that performs an HTTP GET request using `fetch` and then parses the JSON response using `await`. The `try...catch` block is used to handle any errors that may occur during the asynchronous operations.