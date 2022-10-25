// // // while loop to ask what you want to do. implement quit part to avoid infinite
// if input = new, ask them what it is
// // store to dos in an array, add it to end of list
// to list all to dos iterate over the array and print them out
// delete form the array - use the index and splice method

let input = prompt("What would you like to do?");
const todoList = ["make bed", "stretch"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("********");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("********");
  } else if (input === "new") {
    const newTodo = prompt("What would you like to add?");
    todoList.push(newTodo);
    console.log(`${newTodo} has been added to the list`);
  } else if (input === "delete") {
    const removeItem = prompt("What number index do you want to delete?");
    const deleted = todoList.splice(removeItem, 1);
    console.log(`${deleted[0]} has been deleted`);
  }

  input = prompt("What would you like to do?");
}
console.log("You have quit the app");
