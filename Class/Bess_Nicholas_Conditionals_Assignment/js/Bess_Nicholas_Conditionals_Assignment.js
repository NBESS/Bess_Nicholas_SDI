/*Nicholas Bess
  July 24, 2015
  Conditionals Assignment
 */
//alert("JavaScript is working fine!");

//Calculate the annual depreciation of office equipment, then determine if it should be retained or replaced.
//if the book value at the end of the year is less than 55% it will be retained; if the book value at the end of the year is greater than 55% it will be replaced.

//The formula for determining annual depreciation is (Cost - Salvage Value) / Estimated Useful Life


//determine equipment cost
var equipmentCost                   = Number(prompt("Enter the cost of the office item."));     //user inputs the cost of item


if(equipmentCost === 0){       //validates the users entry

            equipmentCost           = Number(prompt("Please enter an amount!"));     //users second opportunity to input an amount when equipmentCost conditional statement is true
            console.log("Your office item costs $" + equipmentCost + ".");       //prints the cost of the item to the console when equipmentCost conditional statement is true

}else{

            console.log("The office item you entered costs $" + equipmentCost + ".");        //prints to console when equipmentCost conditional statement is false

    }

var warningAmount                   = equipmentCost * .45;      //calculates 45% of equipment cost
var replacementAmount               = equipmentCost * .55;      //calculates 55% of equipment cost


//console.log(replacementAmount);     //verifies that the equipment cost is calculated correctly for each condition



//determine salvage value
var salvageValue                    = Number(prompt("Enter the salvage value of the office item."));       //user inputs the salvage value of item


if(salvageValue === 0){       //validates the users entry

            salvageValue            = Number(prompt("Please enter an amount for the salvage value of this office item!"));     //users second opportunity to input an amount when salvageValue conditional statement is true
            console.log("Your office item's salvage value is $" + salvageValue + ".");       //prints to the console when salvageValue conditional statement is true

}else {

            console.log("The office item you entered has a salvage value of $" + salvageValue + ".");        //prints to console when salvageValue conditional statement is false

}


//determine estimated useful life (in years)
var estimatedUsefulLife             = Number(prompt("Enter the estimated useful life of this office item.\nAmount must be in terms of years"));       //user inputs the estimated useful life of item


if(estimatedUsefulLife === 0){       //validates the users entry

            estimatedUsefulLife     = Number(prompt("Please enter an amount!\nThe estimated useful amount must be in terms of years."));     //users second opportunity to input an amount when estimatedUsefulLife condition is true
            console.log("Your office item's estimated useful life is " + estimatedUsefulLife +" years.");       //prints the estimated useful life of the item to the console if estimatedUsefulLife condition is true

}else {

            console.log("The office item you entered has an estimated useful life of " + estimatedUsefulLife + " years.");        //prints to console when estimatedUsefulLife conditional statement is false

}

var annualDepreciation        = (equipmentCost - salvageValue) / estimatedUsefulLife;     //the formula for determining annual depreciation is (Cost - Salvage Value) / Estimated Useful Life


alert("The annual depreciation of this office item is $" + annualDepreciation + ".");       //displays the annual depreciation in the browser
console.log("The annual depreciation of this office item is $" + annualDepreciation + ".");     //prints the annual depreciation to the console

//determine how many years the office item has been owned
//Accumulated depreciation to date = (annual depreciation * year number)

var yearNumber                      = Number(prompt("Please enter the total amount of years in which you have owned this item."));      //user inputs the current amount of years in which the item has been owned

if(yearNumber > estimatedUsefulLife || yearNumber === 0){       //validates the users input; ensures values are present and less than the estimated useful life

            yearNumber              = Number(prompt("Amount must be greater than 0 and less than or equal to the estimated useful life of " + estimatedUsefulLife + " years."));        //users second opportunity to enter valid amounts when yearNumber condition is true
            console.log("You have owned this office item for " + yearNumber + " year(s).");     //prints to the console when yearNumber condition is true
}else{

            console.log("This office item has been owned for " + yearNumber + " year(s).");     //prints to console when yearNumber condition is false
}






//Enter a conditional with at least one else if conditional statement





//Enter Ternary Conditional Statement

