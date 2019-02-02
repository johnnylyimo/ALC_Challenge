
// guess game

    var count = 1, guessNo = null, randNo = null, cont = true, secondChance='';
    randNo = Math.floor(Math.random() * 10);
    while(cont){
      
      guessNo = parseInt(prompt("Atempt no " + count + " Guess number, which one?"))

      if (guessNo === randNo ){
        alert("You have successfull guess right number");
        cont = false;
      }
      else if (guessNo < randNo){
        alert("Your guess is LOW\nTry again")
        count++;
      }
      else if (guessNo > randNo){
        alert("Your guess is HIGH\nTry again")
        count++;
      }
      

      if (count === 9){
        alert("You had 3 trials, all you have failed\nGame is over!");
        secondchance = prompt("ooh! Sorry, anyway, never give up\nYou are given second chance to try again\nDo you want to try again(y or n)")
        if (secondchance === 'y'){
          count = 1;
          continue;
        }
        
        else {
          cont = false
        }
      }
    }
