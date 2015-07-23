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

            estimatedUsefulLife     = Number(prompt("Please enter an amount!\nThe estimated useful life must be in terms of years."));     //users second opportunity to input an amount when estimatedUsefulLife condition is true
            console.log("Your office item's estimated useful life is " + estimatedUsefulLife +" years.");       //prints the estimated useful life of the item to the console if estimatedUsefulLife condition is true

}else {

            console.log("The office item you entered has an estimated useful life of " + estimatedUsefulLife + " years.");        //prints to console when estimatedUsefulLife conditional statement is false

}



//determine how many years the office item has been owned
//Accumulated depreciation to date = (annual depreciation * year number)


//determine the year number
var yearNumber                      = Number(prompt("Please enter the total amount of years in which you have owned this item."));      //user inputs the current amount of years in which the item has been owned

if(yearNumber > estimatedUsefulLife || yearNumber === 0){       //validates the users input; ensures values are present and less than the estimated useful life

            yearNumber              = Number(prompt("Amount must be greater than 0 and less than or equal to the estimated useful life of " + estimatedUsefulLife + " years."));        //users second opportunity to enter valid amounts when yearNumber condition is true
            console.log("You have owned this office item for " + yearNumber + " year(s).");     //prints to console when yearNumber condition is true
}else{

            console.log("This office item has been owned for " + yearNumber + " year(s).");     //prints to console when yearNumber condition is false

}



//determine annual depreciation
var annualDepreciation              = (equipmentCost - salvageValue) / estimatedUsefulLife;     //the formula for determining annual depreciation is (Cost - Salvage Value) / Estimated Useful Life


alert("The Annual Depreciation of this office item is $" + annualDepreciation + ".");       //displays the annual depreciation in the browser
console.log("The Annual Depreciation of this office item is $" + annualDepreciation + ".");     //prints the annual depreciation to console


//determine the annual depreciation to date
var annualDepreciationToDate        = annualDepreciation * yearNumber;      //calculates the annual depreciation to date using the formula (annual depreciation * year number)


alert("The Annual Depreciation to Date is $" + annualDepreciationToDate + ".");       //displays annual depreciation to date in the browser
console.log("The Annual Depreciation to Date is $" + annualDepreciationToDate + ".");     //prints the annual depreciation to date to console


//determine the book value at the end of the year
var bookValueAtYearsEnd             = equipmentCost - annualDepreciationToDate;     //subtracting the annual depreciation to date from the cost of the item, determines the item's book value at the end of the year


alert("The Book Value of this item at the end of year " + yearNumber + " is $" + bookValueAtYearsEnd + ".");       //displays book value at years end in the browser
console.log("The Book Value of this item at the end of year " + yearNumber + " is $" + bookValueAtYearsEnd + ".");     //prints the book value at years end to console



if(bookValueAtYearsEnd >= warningAmount && bookValueAtYearsEnd < replacementAmount) {       //if the book value at the end of the year is 45% or more, and less than 55% the user receives an alert to replace soon

            alert("Your office item has depreciated 45% or more than its original cost. It will need to be replaced soon!");        //when if condition is true this will display in the browser
            console.log("Your office item has depreciated 45% or more than its original cost. It will need to be replaced soon!");      //when if condition is true this will print to console

            }

            else if(bookValueAtYearsEnd<= replacementAmount){       //when depreciation is equal to or greater than 55% of the original cost of the office item

            alert("Your item has depreciated 55% or more than its original cost. It is time for a replacement!");       // when if condition is false, but else if is true, this will display in browser
            console.log("Your item has depreciated 55% or more than its original cost. It is time for a replacement!");     // when if condition is false, but else if is true, this will print to console

            }



else{

            alert("This office item has not depreciated that much, as of year " + yearNumber + ".");        //when both if and else if conditions are false this will display in browser
            console.log("This office item has not depreciated that much, as of year " + yearNumber + ".");      //when both if and else if conditions are false this will print to console

}


(yearNumber > 2) ? alert("This item is lowering your taxable expenses.") : alert("This item is still contributing a good amount to your taxable expenses.");      //ternary conditional statement with result displayed in browser
(yearNumber > 2) ? console.log("This item is lowering your taxable expenses.") : console.log("This item is still contributing a good amount to your taxable expenses.");      //ternary conditional statement with result printed to console



/* The test values entered were:

   (Depreciation less than 45% of original cost) ;

   equipment cost           = $9000
   salvage value            = $8000
   estimated useful life    = 5
   year number              = 2

   *** Results of Values ***
   *
   * The Annual Depreciation of this office item is $200.
   * The Annual Depreciation to Date is $400.
   * The Book Value of this item at the end of year 2 is $8600.
   * This office item has not depreciated that much, as of year 2.
   * This item is still contributing a good amount to your taxable expenses

   (Depreciation more than 55% of original cost) ;

   equipment cost           = $9000
   salvage value            = $2000
   estimated useful life    = 5
   year number              = 4

   *** Results of Values ***
   *
   * The Annual Depreciation to Date is $5600.
   * The Book Value of this item at the end of year 4 is $3400.
   * Your item has depreciated 55% or more than its original cost. It is time for a replacement!
   * This item is lowering your taxable expenses.
 */
