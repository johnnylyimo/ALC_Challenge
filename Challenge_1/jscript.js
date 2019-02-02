

  var namearr = [];
  var choice = null;

  while (choice != 0) {
    choice = prompt("Please select operation below: \n1. Add Student\n2. Display Student list\n0. Quite program");
    switch(choice){
      case "1":
      // console.log("Enter students");
      name = prompt("Enter student name: ");
      namearr.push(name);
      break;
      case "2":
      alert(namearr);
      break;
      case "0":
      choice = 0;
      break;
    }

  }

