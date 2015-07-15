/*
 * Nicholas Bess
 * 15 July 2015
 * Expression Assignment
 */


// alert("JavaScript works fine."); //... ensures that js file is linked to the HTML page.

/* The object of this code is to calculate the amount an individual will have remaining in her/his wallet, after
 * purchasing up to 3 items at a discounted rate (the code will still yield the correct amount if the discount is 0%.
 */

var walletAmount           = prompt("Enter your spending budget.");  // asks the user to input the total amount of cash on-hand for purchase
var discountPercent        = prompt("Enter the percent of the discount.");  // receives the percent of the discount from the user
discountPercent           /= 100;  // divides the percent by 100 to convert into a floating-point number (i.e.. 10 / 100 = .1)
var originalAmount         = [prompt("Enter the cost of the first item."), prompt("Enter the cost of the second item.\nNote: If you do not have a second item enter 0."), prompt("Enter the cost of the third item.\nNote: If you do not have a third item enter 0.")];  // the user inputs the cost of each item into the browser. Minimum number of items entered = 1 ; max = 3
//console.log(originalAmount); //... confirms that the numbers input by user are printing to console
var discount               = (Number(originalAmount[0]) + Number(originalAmount[1]) + Number(originalAmount[2])) * discountPercent;  //multiplies the total cost of all items by the discountPercent (i.e.. 50 * .10)
//console.log(discount); //confirms that the discount string is converted to a number and accurately calculated
var discountedPrice        = Number(originalAmount[0]) + Number(originalAmount[1]) + Number(originalAmount[2]) - discount;  //calculates the amount of the purchase by subtracting the amount of the discount from the original price of all items, before the discount was applied.
//console.log(discountedPrice); //confirms that the discount string is converted to a number and accurately calculated


//Enter Alerts Here




// Enter Final Result Here