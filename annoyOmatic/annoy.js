//This is Version one. Version one only allows for a user to put "yes" or "yeah" to get the alert 
var answer = prompt("Hey bro, are we there yet?");

while( answer !== "yes" && answer !== "yeah"){
   var answer = prompt("Hey bro, are we there yet?");
}
alert("YES BRODIE! WE MADE IT!");



//This is Version two. Version two checks if a user uses "yes" in a sentence and it will call the alert if it is
//var answer = prompt("Hey bro, are we there yet?");

//while(answer.indexOf("yes")=== -1){
//    var answer = prompt("Hey bro, are we there yet?");
//}
//alert("YES BRODIE! WE MADE IT!");

