//----CALLBACK FUNCTIONS----

// A callback is a function given to another function as an argument.
// It is called a "callback" because greetUser calls it back later.
function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  // The callback is executed after the greeting work is finished. now we can call the callback function to run it.
  callback();
}

// This function is the callback. It does not run when it is defined; it runs quickly after the greeting is finished.
function finishGreeting() {
  console.log("The callback ran after the greeting.");
}

// Pass finishGreeting to greetUser without parentheses as an argument. This means we are passing the function itself, not the result of calling it.
// Parentheses would call it immediately; passing the function lets greetUser call it. thats why we don't use parentheses when passing a callback function. then its called a callback function.
greetUser("Alex", finishGreeting);
