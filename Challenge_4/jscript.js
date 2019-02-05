function convertTemp(){

let startTemp;
let endTemp; 
const lowerLimit = 50;
const upperLimit = 212;
let stepSize = 10;
let repeat= true;

 //let stepSize = prompt("Enter step size ")

// prompt temperature and convert to fahrenheit on fly.
do{
    startTemp =  9/5 * Number(prompt("Enter Start Temperature (not less than 10) in celsius")) + 32;
  if (startTemp < lowerLimit) {
    alert('Invalid! ' + Math.round(((startTemp-32)*5/9))  + ' is less that lower Limit(10)\nEnter again');
  }
} while(startTemp < lowerLimit)


  do {
    endTemp =  9/5 * Number(prompt("Enter End Temperature (not above 100) in celsius")) + 32;
    if (endTemp > upperLimit) {
      alert('Invalid! ' + Math.round(((endTemp-32)*5/9)) + ' is high than upper Limit(100)\nEnter again');
    }
  }while(endTemp > upperLimit)

  // let stepSize = prompt("Enter step size ")


// validate startTemp and endTemp not below limit set
let arrTemp=[];
for (startTemp; startTemp <= endTemp; startTemp += stepSize){
 
  arrTemp.push(startTemp);
  }
  alert(arrTemp);
}

