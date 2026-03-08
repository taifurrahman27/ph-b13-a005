# ph-b13-a005


    - 1️⃣ What is the difference between var, let, and const?

    The difference between var, let, and const

var: This is a variable that is scoped to a function.  We can redeclare and reassign it. It's mainly used in older versions of JavaScript.

let: This variable is scoped to a block. We can reassign it, but we can't redeclare it in the same block.

const: This is also a block-scoped variable. Once  we initialize it,  we can't reassign or redeclare it.


    - 2️⃣ What is the spread operator (...)?

    The spread operator allows  us to expand or duplicate elements from an array or object.

For example:

const arr = [1,2,3];
const newArr = [...arr, 4];

It makes it simple to copy, combine, or send elements.


    - 3️⃣ What is the difference between map(), filter(), and forEach()?

    The difference between map(), filter(), and forEach()

map(): This method makes a new array by changing each item.

filter(): This method makes a new array that only includes items that meet a certain condition.

forEach(): This method goes through each item in an array but doesn’t create a new array.


    - 4️⃣ What is an arrow function?

    An arrow function provides a more compact way to define functions in JavaScript with the use of =>.

For example:

const add = (a, b) => a + b;

This approach helps make the code simpler and easier to understand.


    - 5️⃣ What are template literals?

    Template literals are strings that  we write with backticks (``) 
    and they let us include variables or expressions using ${}.

For example:

const name = "Jasim";
const text = `Hello ${name}`;

They help make string formatting simpler and easier to read.