//Write a function isEven() which takes a single numeric argument and returns true if the number is EVEN and flase if otherwise

//----This is the first way to solve the problem----//
//function isEven(number){
//return true if even
//    if (number % 2 === 0) {
//    return true;
//return false if otherwise 
//} else {
//    return false

//}
//}

//This is another way to solve the problem----//
//The return function runs the same code as the one above, but it will return true or false without having to tell the computer to run true or false//
function isEven(number){
    return number % 2 === 0;
}

//Write a function factorial() which takes a single numeric argument and returns the factorial of that number.

function factorial(number){
//define a results variable
var result = 1;
//calculate factorial and store value in results 
for (var i = 2; i <= number; i++){
    result *= i;
}
//return the resluts variable
return result;
}
//factorial(4) 4 x 3 x 2 x 1

//Write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version. Basically replace "-"s with "_"s.

function kebabToSnake(string){
    //Replace all "-"s with "_"s
    var newString = string.replace(/-/g, "_");
    //Return string 
    return newString;
}

