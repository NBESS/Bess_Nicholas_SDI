// Does contestant weigh enough to enter heavyweight division?
var weight = Number(prompt("Enter your weight."));
//If the competitor is less than 215 he needs to gain some weight
if(weight < 215){
    //if its less than 215
    console.log("You need to gain some weight!");
}else{
    //if its greater than or equal to 215
    console.log("You qualify for the heavy weight division!")
}
