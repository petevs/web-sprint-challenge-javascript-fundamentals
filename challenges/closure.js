// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:

// Functions can access variables outside of their scope. nestedFunction creates closue and references the "internal" variable, which is outside of its scope. It is a one way street, we can reach outside but other functions cannot reach inside. For example, in this case, we wouldn't be able to access the internal variable from outside of myFunction.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param) {
  let counter = 0;
  for (let i = 0; i <= param; i++) {
    counter += i;
  }
  return counter;
}
