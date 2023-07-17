💡 **Q.1** Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

Example:
```javascript
console.log(x); // Output: undefined
var x = 5;

// Equivalent to:
var x;
console.log(x); // Output: undefined
x = 5;
```

In the example above, the variable `x` is hoisted to the top, and its declaration is moved before the `console.log()` statement. However, since the initialization (`x = 5`) is not hoisted, the output is `undefined`.

💡 **Q.2** Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs with variables declared using `let` and `const`. The TDZ is the time between the start of the scope (block) and the actual declaration of the variable. During this time, trying to access the variable will result in a ReferenceError.

Example:
```javascript
console.log(x); // Throws ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

In the example above, the variable `x` is in the TDZ until its declaration, so trying to access it before that results in a ReferenceError.

💡 **Q.3** The main differences between `var` and `let` are:

- Scope: Variables declared with `var` have function scope, meaning they are only accessible within the function where they are defined (including global scope if declared outside of any function). On the other hand, variables declared with `let` have block scope, making them accessible only within the block where they are defined.

- Hoisting: Both `var` and `let` declarations are hoisted to the top of their containing scope. However, variables declared with `var` are initialized with `undefined`, while variables declared with `let` remain uninitialized in the TDZ (Temporal Dead Zone).

- Re-declaration: Variables declared with `var` can be re-declared within the same scope, which can lead to unintended issues. Variables declared with `let` cannot be re-declared within the same scope.

💡 **Q.4** Some major features introduced in ECMAScript 6 (ES6) are:

1. `let` and `const`: Block-scoped variable declarations.
2. Arrow Functions: Concise syntax for writing functions.
3. Template Literals: Improved syntax for working with strings.
4. Destructuring: Extracting values from arrays and objects more easily.
5. Default Parameters: Specifying default values for function parameters.
6. Classes: Syntactical sugar for creating and working with constructor functions.
7. Modules: Supporting importing and exporting of code between files.
8. Spread Operator: Used to spread array elements or object properties.
9. Rest Parameters: Collecting function arguments into an array.
10. Promises: Improved handling of asynchronous operations.
11. Sets and Maps: Data structures for unique values and key-value pairs.
12. Enhanced Object Literals: Shorthand syntax for defining object properties and methods.

💡 **Q.5** The difference between `let` and `const` is:

- `let`: Variables declared with `let` can be reassigned a new value, and their values can change over time. However, the variable itself cannot be re-declared within the same scope.

Example:
```javascript
let x = 5;
x = 10; // Valid, reassigning a new value to 'x'
```

- `const`: Variables declared with `const` are read-only constants and cannot be reassigned a new value after they are initialized. Their value remains the same throughout the program.

Example:
```javascript
const y = 20;
y = 30; // Invalid, cannot reassign a new value to 'y'
```

💡 **Q.6** Template literals, introduced in ES6, are string literals that allow embedding expressions and variables inside backticks (\`). They provide an easier and more readable way to work with strings compared to traditional string concatenation.

Example:
```javascript
const name = "Alice";
const age = 30;

// Using template literals
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.
```

Template literals use `${}` to enclose expressions or variables within a string. The expressions inside `${}` are evaluated, and their values are inserted into the string.

💡 **Q.7** The main difference between `map` and `forEach` is:

- `map`: The `map` method is used to create a new array by applying a function to each element of the original array. It returns a new array with the same length as the original array, where each element is the result of the applied function.

Example:
```javascript
const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);

console.log(squares); // Output: [1, 4, 9]
```

- `forEach`: The `forEach` method is used to iterate through the elements of an array and perform an action for each element. It does not return a new array but instead modifies the existing array.

Example:
```javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * num));

// Output:
// 1
// 4
// 9
```

💡 **Q.8** Object and array destructuring in ES6 is a way to extract properties or elements from objects and arrays and assign them to variables in a single step.

Example of object destructuring:
```javascript
const person = { name: "Alice", age: 30 };
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age); // Output: 30
```

Example of array destructuring:
```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

💡 **Q.9** In ES6, default parameter values can be defined for function parameters, which are used when the argument is not provided or is `undefined`. This allows for more flexible and robust function implementations.

Example:
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

In the example above, the `name` parameter has a default value of `"Guest"`. If no argument is passed to the `greet` function, it uses the default value.

💡 **Q.10** The spread operator (`...`) in ES6 is used to spread the elements of an array or the properties of an object into another array or object. It provides a concise way to copy arrays/objects, merge arrays/objects, and pass multiple arguments to functions.

Example of spreading an array:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]
```

Example of spreading an object:
```javascript
const obj1 = { name: "Alice", age: 30 };
const obj2 = { ...obj1, city: "New York" };

console.log(obj2);
// Output: { name: "Alice", age: 30, city: "New York" }
```

The spread operator can also be used to pass multiple arguments to a function:

```javascript
function add(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(add(...numbers)); // Output: 6
```