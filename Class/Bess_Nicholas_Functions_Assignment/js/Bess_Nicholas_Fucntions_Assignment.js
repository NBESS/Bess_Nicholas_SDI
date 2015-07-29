/**
 * Nicholas Bess
 * July 29, 2015
 * Functions Assignment
 */

//alert('JavaScript is working!');


//variables

var myTicket = prompt("Please enter which type of ticket you have played.\n\nFlorida Lottery or Powerball.");       //ask for user input to define variable
var floridaLotteryNumbers;      //declares variable 
var powerBall;      //declares variable
var powerBallNumbers;       //declares variable



//functions

function ticketValidation(ticketType) {     //function to validate ticket type

    var clickCounter = 1;       //variable to count number of times the user clicks without entering data 

    while (ticketType === "") {     //while loop for empty string

        ticketType = prompt("Enter a ticket type.\n\nMust be Florida Lottery or Powerball");     //adds users input to variable with scope limited to the function  

        clickCounter++;     //increases each time loop is true

        if (clickCounter = 4) {       //when empty string is detect 4th time

            break;      //the loop breaks

        }

    }

    return ticketType;      //when the loop is false or after the loop breaks ticket type is assigned to the argument


}










//main code





//test values