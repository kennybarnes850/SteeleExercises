console.log("Print all numbers between -10 and 19");
var num = -10;
while( num < 20){
   console.log("count is: " + num);
   num++;
}

console.log("Print all even nubers between 10 and 40");
var number = 10;
while( number <= 40){
   console.log("count is: " + number);
   number+=2
}

console.log("Print all odd numbers between 300 and 333");
var balance = 301;
while( balance <= 333){
   console.log("count is: " + balance);
   balance+=2;
}

console.log("Print all numbers Divisible by 5 AND 3 between 5 and 50");
var sum = 5;
while( sum <= 50){
    if(sum % 5 === 0 && sum % 3 === 0){
    console.log("Count is: " + sum);
    }
    sum += 1;
}
