var num1;
var num2;
var operation;

num1 = parseInt(prompt("Enter First number"));
num2 = parseInt(prompt("Enter Second number"));
operation = prompt("Choose the operation\n");

switch(operation) {
  case '+': 
  alert("The result is: " + (num1 + num2));
  break;
  case '-': 
  alert("The result is: " + (num1 - num2));
  break;
  case '*': 
  alert("The result is: " + (num1 * num2));
  break;
  case '/': 
  alert("The result is: " + (num1 / num2));
  break;
}

