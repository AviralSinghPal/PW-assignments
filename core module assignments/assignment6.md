💡 **Q.1** A constructor is a special method in object-oriented programming languages, including JavaScript. It is called when an object is created from a class and is used to initialize the object's properties and set up its initial state. Constructors have the same name as the class and are typically defined using the `constructor` keyword.

The purpose of a constructor is to ensure that an object created from a class has all its required properties set to meaningful initial values. It allows you to define default values or take input parameters to initialize the object.

Example of a constructor in JavaScript:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
```

💡 **Q.2** The `this` keyword in JavaScript is a special variable that refers to the current instance of an object within a method or a constructor. Its purpose is to access or modify the properties and methods of the object to which it belongs.

The primary purpose of `this` is to avoid ambiguity when working with object-oriented code and to provide context to the code based on how it is called. It allows methods to access the object's properties and other methods.

Example of `this` keyword:
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice");
person1.sayHello(); // Output: "Hello, my name is Alice"
```

In the example above, `this.name` inside the `sayHello` method refers to the `name` property of the specific `Person` object (`person1` in this case).

💡 **Q.3** `call`, `apply`, and `bind` are methods available in JavaScript for manipulating the value of `this` in functions and for invoking functions with specific context and arguments.

- `call`: The `call` method allows you to invoke a function with a specified `this` value and individual arguments passed in as separate arguments.

Example of using `call`:
```javascript
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Alice" };
sayHello.call(person, "Hi"); // Output: "Hi, Alice"
```

- `apply`: The `apply` method is similar to `call`, but it takes an array-like object as its second argument, where each element of the array represents an argument to be passed to the function.

Example of using `apply`:
```javascript
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Alice" };
sayHello.apply(person, ["Hi"]); // Output: "Hi, Alice"
```

- `bind`: The `bind` method creates a new function with the same function body as the original function but with a fixed `this` value. It allows you to create a function with a specific context that can be called later.

Example of using `bind`:
```javascript
function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Alice" };
const sayHelloToPerson = sayHello.bind(person);
sayHelloToPerson("Hi"); // Output: "Hi, Alice"
```

The main difference between `call` and `apply` is the way arguments are passed: `call` takes individual arguments, while `apply` takes an array of arguments. `bind` creates a new function with a fixed `this` value but does not immediately invoke it.

💡 **Q.4** OOPS (Object-Oriented Programming) is a programming paradigm that focuses on the concept of objects and classes. It aims to organize code into reusable and self-contained units called objects, each having its own properties and methods. OOP provides a way to model real-world entities and their interactions in code.

The four main principles of OOP are:

1. **Encapsulation**: The bundling of data (properties) and methods (functions) that operate on the data within a single unit (object). Encapsulation allows us to hide the internal implementation details and expose only relevant functionalities.

2. **Abstraction**: The process of simplifying complex objects by representing the essential characteristics and hiding unnecessary details. Abstraction allows us to create classes with abstract properties and methods, which can be later implemented in specific subclasses.

3. **Inheritance**: The mechanism by which one class can inherit properties and methods from another class. Inheritance promotes code reusability and allows us to create a hierarchy of classes, where subclasses inherit from their superclass.

4. **Polymorphism**: The ability of objects to take on multiple forms or exhibit multiple behaviors. Polymorphism allows objects of different classes to be treated as objects of a common superclass, enabling a single interface to represent different types of objects.

💡 **Q.5** Abstraction is one of the four main principles of Object-Oriented Programming (OOP). It refers to the process of simplifying complex objects by representing only the essential characteristics and hiding unnecessary details.

The purpose of abstraction is to provide a clear and concise interface to interact with objects, hiding the underlying complexity and implementation details. By doing so, abstraction allows developers to work at a higher level of understanding and interact with objects using a simplified and consistent interface.

In OOP, abstraction is achieved through abstract classes and methods. An abstract class is a class that cannot be instantiated on its own but can serve as a blueprint for other classes. It defines abstract methods, which are declared but do not contain implementation details. Subclasses that inherit from the abstract class must provide concrete implementations for the abstract methods.

By using abstraction, developers can focus on the essential functionalities of an object without worrying about how those functionalities are implemented internally. This promotes code modularity, reusability, and maintainability.

💡 **Q.6** Polymorphism is one of the four main principles of Object-Oriented Programming (OOP). It refers to the ability of objects to take on multiple forms or exhibit multiple behaviors based on the context in which they are used.

The purpose of polymorphism is to allow objects of different classes to be treated as objects of a common superclass. This enables a single interface to represent different types of objects, promoting code flexibility and reusability.

There are two types of polymorphism:

1. **Compile-time Polymorphism (Static Polymorphism)**: This type of polymorphism is resolved during compile time. It is achieved through method overloading and operator overloading. Method overloading allows a class to have multiple methods with the same name but different parameters, and the appropriate method is called based on the arguments provided. Operator overloading allows the same operator to have different meanings based on the operands.

2. **Run-time Polymorphism (Dynamic Polymorphism)**: This type of polymorphism is resolved during run time. It is achieved through method overriding. Method overriding allows a subclass to provide a specific implementation for a method that is already defined in its superclass. When a method is called on an object, the appropriate method from the subclass

 is executed based on the actual type of the object.

Polymorphism allows for code that is more flexible and easier to maintain, as it promotes code reuse and reduces the need for conditional statements based on object types.

💡 **Q.7** Inheritance is one of the four main principles of Object-Oriented Programming (OOP). It is the mechanism by which one class (subclass) inherits properties and methods from another class (superclass). Inheritance allows the subclass to reuse the code and behavior defined in the superclass, promoting code reusability and code organization.

The purpose of inheritance is to create a hierarchy of classes, where the subclass inherits the properties and behaviors of its superclass. This allows developers to model real-world relationships and is useful when classes share common attributes and functionalities.

Example of inheritance in JavaScript:
```javascript
// Superclass
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Subclass inheriting from Animal
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Buddy");
dog1.speak(); // Output: "Buddy barks."
```

In the example above, `Animal` is the superclass, and `Dog` is the subclass that inherits from `Animal`. The `Dog` class inherits the `name` property and the `speak` method from the `Animal` class. The `speak` method is overridden in the `Dog` class to provide a specific implementation for dogs.

💡 **Q.8** Encapsulation is one of the four main principles of Object-Oriented Programming (OOP). It refers to the bundling of data (properties) and methods (functions) that operate on the data within a single unit (object). The purpose of encapsulation is to hide the internal implementation details of an object and expose only relevant functionalities through public methods.

Encapsulation allows you to control access to the properties and methods of an object. It prevents direct manipulation of object properties from outside the object, providing a level of security and data integrity.

In JavaScript, encapsulation is achieved by using private and public access modifiers. However, JavaScript does not have built-in access modifiers like other OOP languages (e.g., Java). Instead, developers often use closures or symbols to create private properties and use regular methods to expose public functionalities.

Example of encapsulation in JavaScript:
```javascript
class Counter {
  #count = 0; // Private property using private class field (supported in modern browsers)

  increment() {
    this.#count++;
  }

  decrement() {
    this.#count--;
  }

  getCount() {
    return this.#count;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
```

In the example above, the `#count` property is private and can only be accessed and modified from within the `Counter` class. The `increment`, `decrement`, and `getCount` methods are public and allow external code to interact with the `Counter` object in a controlled way.

💡 **Q.9** In JavaScript, a class is a template for creating objects with properties and methods. It defines the structure and behavior of objects based on the class blueprint. A class serves as a blueprint for creating multiple objects with similar characteristics.

A class is defined using the `class` keyword, followed by the class name and a code block containing the properties and methods of the class.

Example of a class in JavaScript:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.sayHello(); // Output: "Hello, my name is Alice and I am 30 years old."
person2.sayHello(); // Output: "Hello, my name is Bob and I am 25 years old."
```

In the example above, `Person` is a class with a constructor that takes `name` and `age` as parameters and assigns them to the properties of the class. It also has a `sayHello` method that logs a greeting message with the person's name and age.

💡 **Q.10** The `super` keyword is used in JavaScript to call the constructor of a parent class from a subclass. It is primarily used in class inheritance to initialize the properties of the subclass with the properties of the superclass.

When a subclass extends a superclass, it must call the superclass constructor using `super` before it can use `this`. This ensures that the properties of the superclass are properly initialized for the subclass.

Example of using the `super` keyword in class inheritance:
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the constructor of the superclass
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} (a ${this.breed}) barks.`);
  }
}

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: "Buddy (a Golden Retriever) barks."
```

In the example above, the `Dog` class extends the `Animal` class. The `super(name)` inside the `Dog` constructor calls the constructor of the `Animal` class to initialize the `name` property. The `Dog` class also has its own `breed` property.