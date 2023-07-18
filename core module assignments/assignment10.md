💡 **Q.1: Explain Middlewares in NodeJS?**

In Node.js, middleware is a function that is executed between the incoming request and the response sent back by the server. It sits in the middle of the request-response cycle and can perform various tasks such as logging, authentication, data manipulation, error handling, etc. Middlewares are an essential part of Node.js applications, particularly in web frameworks like Express.

Middleware functions have access to the request (`req`) and response (`res`) objects, as well as the `next` function. The `next` function is used to pass control to the next middleware in the chain. If the current middleware does not call `next()`, the request-response cycle will be terminated, and the response will be sent back to the client.

Example of a simple middleware in Express:

```javascript
const express = require('express');
const app = express();

// Middleware function
const logger = (req, res, next) => {
  console.log(`Request received at: ${new Date()}`);
  next(); // Move to the next middleware or route handler
};

// Using the middleware for all routes
app.use(logger);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

In this example, the `logger` middleware logs the timestamp of each incoming request. The `app.use()` method is used to apply the middleware to all routes, and it will be executed for every incoming request before it reaches the route handler for `/`.

💡 **Q.2: Why use Express Over NodeJS?**

Express is a web application framework for Node.js, and it is built on top of the Node.js core HTTP module. There are several reasons why developers prefer to use Express over plain Node.js:

1. **Simplicity**: Express provides a simpler and more concise syntax for handling HTTP requests and building web applications compared to the raw Node.js HTTP module. It abstracts away many low-level details, making it easier to work with.

2. **Middleware**: Express comes with a rich set of middleware functions that provide additional functionality like routing, parsing request bodies, handling cookies, and much more. Middleware simplifies common tasks and allows developers to focus on building the application's core logic.

3. **Routing**: Express provides a clean and straightforward routing mechanism, allowing developers to define routes for different HTTP methods and URLs. This makes it easy to organize and manage the application's endpoints.

4. **Community and Ecosystem**: Express has a large and active community, which means a wealth of documentation, tutorials, and libraries. The vast ecosystem of Express plugins and middleware makes it easy to extend the functionality of the application without reinventing the wheel.

5. **Flexibility**: While Express provides a solid foundation for building web applications, it also allows developers to use additional middleware or custom configurations to tailor the application to their specific needs.

6. **Widely Adopted**: Express is one of the most popular web frameworks for Node.js, which means that many developers are already familiar with it. This popularity makes it easier to find solutions to common problems and collaborate with other developers.

While Node.js itself is a powerful runtime environment for executing JavaScript on the server-side, Express complements it by providing a higher-level framework specifically designed for building web applications and APIs.

💡 **Q.3: What are REST API?**

REST (Representational State Transfer) API is an architectural style for designing networked applications. It is a set of guidelines and best practices that allow different systems to communicate over the internet using standard HTTP methods. RESTful APIs use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources (data objects).

Key principles of RESTful APIs:

1. **Statelessness**: Each HTTP request contains all the necessary information to process the request, and the server does not store any client state. This makes the API scalable and easy to cache.

2. **Uniform Interface**: RESTful APIs have a uniform and consistent interface, using standard HTTP methods (GET, POST, PUT, DELETE) for different operations on resources.

3. **Resource-based**: Resources are identified using URLs (Uniform Resource Locators), and each URL represents a specific resource.

4. **Representation**: Resources can have multiple representations, such as JSON, XML, or HTML. The client can choose the appropriate representation based on its capabilities.

5. **Stateless Communication**: Each request from a client to the server must contain all the information needed to understand and process the request. The server does not store any information about the client's state between requests.

RESTful APIs are commonly used to build web services and provide a way for different applications to communicate and exchange data. They have become the standard for building APIs due to their simplicity, scalability, and ease of use.

💡 **Q.4: What is the use of MongoDB?**

MongoDB is a popular NoSQL database system that provides a flexible and scalable way to store and manage data. It is a document-oriented database, which means it stores data in JSON-like documents with dynamic schemas. MongoDB is designed to handle large volumes of data and is well-suited for applications that require high scalability and performance.

Key features and use cases of MongoDB:

1. **Document Store**: MongoDB stores data in documents, which can contain nested structures and arrays, making it suitable for handling complex data models.

2. **Schema Flexibility**: Unlike traditional relational databases, MongoDB does not require a fixed schema. Each document in a collection can have different fields, allowing for more flexibility when dealing with evolving data models.

3. **Horizontal Scalability**: MongoDB can scale horizontally by sharding data across multiple servers. This allows it to handle large datasets and high read/write workloads efficiently.

4. **Real-time Analytics**: MongoDB supports real-time analytics by allowing complex queries, indexing, and aggregation operations.

5. **High Availability**: MongoDB supports replica sets, which provide automatic failover and data redundancy, ensuring high availability and data durability.

6. **Geospatial Indexing**: MongoDB provides built-in support for geospatial queries and indexing, making it suitable for location-based applications.

7. **Ease of Use**: MongoDB's query language is similar to JSON, making it easy for developers to interact with the database. It also has a rich set of drivers and libraries for various programming languages.

MongoDB is widely used in modern web applications, IoT (Internet of Things) projects, content management systems, real-time analytics, and other use cases where flexibility and scalability are essential.

💡 **Q.5: What is Mongoose, and how does it relate to MongoDB?**

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based solution for interacting with MongoDB databases, making it easier to work with MongoDB in a Node.js environment. Mongoose is not a replacement for MongoDB but acts as a wrapper around the MongoDB driver to simplify the data modeling and querying process.

Key features and benefits of Mongoose:

1. **Schema Definition**: Mongoose allows developers to define a schema for their data models, which includes field types, default values, validation rules, and more. This enforces data consistency and provides a structured approach to handling data.

2. **Middleware**: Mongoose supports middleware functions that allow developers to define pre and post hooks for various database operations. This is useful for tasks like data validation, transformations, and logging.

3. **Data Validation**: Mongoose provides built-in validation options that help ensure the data being saved to the database meets specified constraints.

4. **Query Building**: Mongoose simplifies the process of building MongoDB queries using a fluent API. It offers chainable methods to define queries and includes powerful filtering and aggregation capabilities.

5. **Population**: Mongoose allows developers to define relationships between collections and enables population, which allows data from referenced collections to be populated in query results.

6. **Middleware**: Mongoose supports middleware functions that allow developers to define pre and post hooks for various database operations. This is useful for tasks like data validation, transformations, and logging.

Mongoose is often used in Node.js applications where MongoDB is the chosen database. It provides an additional abstraction layer over MongoDB, making it easier to work with data models, relationships, and validations in a more structured manner. However, it's important to note that Mongoose is not required to use MongoDB with Node.js; developers can still interact directly with the MongoDB driver if they prefer a more low-level approach.


**Q.6 Build a Server Using Http Module NodeJS with api endpoints for Getting Products Data**
```javascript
const http = require('http');

const productsData = {
  men: [
    { id: 1, name: 'Men Product 1' },
    { id: 2, name: 'Men Product 2' },
    // Add more men products here...
  ],
  women: [
    { id: 1, name: 'Women Product 1' },
    { id: 2, name: 'Women Product 2' },
    // Add more women products here...
  ],
};

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsData.men));
  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsData.women));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

**Q.7 Build a Server that Generate Random Number Using Express**
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  res.json({ random: randomNum });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

**Q.8 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express**
```javascript
const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
  res.json({ counter });
});

app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

**Q.9 Backend for Todo Web Application with API Endpoints**
```javascript
const express = require('express');
const app = express();
const port = 3000;

const todos = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ todos });
});

app.post('/add', (req, res) => {
  const { task } = req.body;
  if (!task) {
    res.status(400).json({ error: 'Task is required.' });
  } else {
    todos.push({ id: todos.length + 1, task });
    res.json({ msg: 'Todo added successfully.', data: todos });
  }
});

app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;

  const todo = todos.find((item) => item.id === id);

  if (!todo) {
    res.status(404).json({ error: 'Todo not found.' });
  } else {
    todo.task = task;
    res.json({ msg: 'Todo updated successfully.', data: todos });
  }
});

app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = todos.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).json({ error: 'Todo not found.' });
  } else {
    todos.splice(index, 1);
    res.json({ msg: 'Todo deleted successfully.', data: todos });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```
