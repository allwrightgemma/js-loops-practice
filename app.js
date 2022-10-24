// // // while loop to ask what you want to do. implement quit part to avoid infinite
// if input = new, ask them what it is
// // store to dos in an array, add it to end of list
// to list all to dos iterate over the array and print them out
// delete form the array - use the index and splice method

let input = prompt("What would you like to do?");

while (input !== "quit") {
  prompt("What would you like to do?");
}
console.log("You have quit the app");

// if (input === "new") {
//   let todo = prompt("What would you like to add?");
//   let list = list.push("todo");
//   console.log(list);
// }
