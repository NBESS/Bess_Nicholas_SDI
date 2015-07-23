/*Nicholas Bess
  July 24, 2015
  Conditionals Assignment
 */
//alert("JavaScript is working fine!");

//Calculate the annual depreciation of office equipment, then determine if it should be retained or replaced.
//if the depreciation is less than 55% it will be retained; if greater than 55% it will be replaced.

//The formula for determining depreciation is (Cost - Salvage Value) / Estimated Useful Life

var equipmentCost           = Number(prompt("Enter the cost of the office item."));       //user inputs the cost of item


if(equipmentCost === 0){       //validate the users entry
    equipmentCost = Number(prompt("Please enter an amount!"));     //users second opportunity to input an amount
    console.log("Your item costs $" + equipmentCost);       //prints the cost of the item to the console

}else{
    console.log("The item you entered costs $" + equipmentCost);        //prints to console if the user inputs a number greater than 0 on first prompt

    }

var warningAmount           = equipmentCost * .45;      //calculates 45% of equipment cost
var replacementAmount       = equipmentCost * .55;      //calculates 55% of equipment cost

//console.log(replacementAmount);     //verifies that the equipment cost is calculated correctly for each condition


var salvageValue            = Number(prompt("Enter the salvage value of the office item."));       //user inputs the salvage value of item


if(salvageValue === 0){       //validate the users entry
    salvageValue = Number(prompt("Please enter an amount!"));     //users second opportunity to input an amount
    console.log("Your item's salvage value is $" + salvageValue);       //prints the cost of the item to the console

}else {
    console.log("The item you entered has a salvage value of $" + salvageValue);        //prints to console if the user inputs a number greater than 0 on first prompt

}





//Enter Prompts (Ensure that all prompts are validated)





//Enter Conditional Statement with at least one Logical Operator (&&, || or !)





//Enter Ternary Conditional Statement

