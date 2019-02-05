function runCalc(){
        do {
                var num1;
                var num2;
                var operation;
            
                num1 = Number(prompt("Enter First number"));
                num2 = Number(prompt("Enter Second number"));
                if (isNaN(num1) || isNaN(num2)){
                  alert('Invalid Input, one of your input is not a Number \nPlease Enter Numbers only\nTry again'); 
                  continue;
                }
                operation = prompt("Choose Calculations Operations below\n   +\n   -\n   *\n   /");

                switch(operation) {
                  case '+': 
                  alert(num1 + (operation+'') + num2 + "\nThe Answer: " + (num1 + num2));
                  break;
                  case '-': 
                  alert(num1 + (operation+'') + num2 + "\nThe Answer: " + (num1 - num2));
                  break;
                  case '*': 
                  alert(num1 + (operation+'') + num2 + "\nThe Answer: " + (num1 * num2));
                  break;
                  case '/': 
                  alert(num1 + (operation+'') + num2 + "\nThe Answer: " + (num1 / num2));
                  break;
                  default:
                  alert(operation + ' <== Invalid operation\nTry again')
                  continue;
                  break;
                }
                let yesno = prompt("Do you want to do another Calculation(yes:y or no:n)")
                if (yesno === 'y'|| yesno === 'Y' || yesno === 'yes' || yesno === 'YES')  continue;

                else {
                  alert('Calculator is QUIT now...... Thanks!')
                  break;}
              }
        while(true)
    }
