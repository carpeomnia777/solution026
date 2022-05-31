//write a function that takes in a number and returns the century it is in.
function century(year) {
let centArr = Array.from(String(year), Number);
// let head =Number(centArr.slice(0,2).join(''));
// let century = head + 1;
if(centArr.length <= 2){
    return 1;
}
else if(year % 100 == 0){
    return year / 100;
  }  
else if (centArr.length == 3){
    return Number(centArr.slice(0,1).join('')) + 1;
}
else if(centArr.length == 4)
return Number(centArr.slice(0,2).join('')) + 1;
}

//code explanation: using previous knowledge gathered in solving other codewars:
//i set the entered numbers as an array then for the first century i hardcoded a conditional
//for the 3 digit years i set a conditional that slices the first digit and added 1 to get the century
//for the typical 4 digit years i set a conditional that slice the first two digits and added 1.

//potential problems: if anyon were to enter a date as 0089 then the program wouldn't work as intended. ,,