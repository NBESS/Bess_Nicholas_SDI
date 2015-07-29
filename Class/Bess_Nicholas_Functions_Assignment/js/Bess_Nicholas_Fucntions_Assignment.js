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


function lottoNumberGenerator(min, max, num){       //function to generate a random number with a min, max and num (number of occurrences)

    var lottoBall = [];     //declares an array

    for (var i = 0 ; i < num ; i++){        //for loop that is true while the array has an assigned value of num

        lottoBall[i] = Math.random() * (max - min) + min;       //generates a random number to each occurrence of the array set by the parameters (max-min) + min
        lottoBall[i] = Math.round(lottoBall[i]);        //sets a parameter to round the random number to the nearest whole number

    }

    return lottoBall;       //assigns the output of the function to an array and returns it to function

}

myTicket =  ticketValidation(myTicket);     //sends my ticket through function to validate user input

alert("You have played "+ myTicket + "\n\nGood Luck!");     //displays ticket type message in browser
console.log("You have played "+ myTicket + "\n\nGood Luck!");       //prints ticket type message to console

if (myTicket === "Florida Lottery"){        //if it is true that user inputs a Florida Lottery ticket

    floridaLotteryNumbers = lottoNumberGenerator(1, 53, 6);     //the array is assigned 6 random numbers between 1 and 53, output from the function

    alert("The winning Florida lottery numbers are: " + floridaLotteryNumbers[0]  + ", " + floridaLotteryNumbers[1] + ", " +  floridaLotteryNumbers[2] + ", " +  floridaLotteryNumbers[3] + ", " +  floridaLotteryNumbers[4] + ", " +  floridaLotteryNumbers[5]);        //the winning FL numbers are displayed in the browser
    console.log("The winning Florida lottery numbers are: " + floridaLotteryNumbers[0] + ", " +  floridaLotteryNumbers[1] + ", " +  floridaLotteryNumbers[2] + ", " +  floridaLotteryNumbers[3] + ", " +  floridaLotteryNumbers[4] + ", " +  floridaLotteryNumbers[5]);      //the winning FL numbers are printed to the console

}else{      //if the users ticket is not FL it has to be for Powerball

    powerBallNumbers = lottoNumberGenerator(1, 59, 5);      //the array is assigned 5 numbers between 1 and 59, output from the function
    powerBall = lottoNumberGenerator(1, 35, 1);     //the array is assigned 1 number between 1 and 35, output from the function

    alert("The winning Powerball numbers are: " + powerBallNumbers[0] + ", " + powerBallNumbers[1] + ", " +  powerBallNumbers[2] + ", " +  powerBallNumbers[3] + ", " +  powerBallNumbers[4] + ", and the Powerball is " + powerBall[0]);       //the winning Powerball numbers are displayed in the browser
    console.log("The winning Powerball numbers are: " + powerBallNumbers[0] + ", " + powerBallNumbers[1] + ", " +  powerBallNumbers[2] + ", " +  powerBallNumbers[3] + ", " +  powerBallNumbers[4] + ", and the Powerball is " + powerBall[0]);     //the winning Powerball numbers are printed to the console

}

console.log("If you believe you may have a gambling problem, call 1 - 800 - GETHELP!");     //a public service announcement is printed to the console
console.log("If you believe you may have a gambling problem, call 1 - 800 - GETHELP!");     //a public service announcement is printed to the console


/*  Test Results:  

FL: "The winning Florida lottery numbers are: 9, 41, 45, 19, 28, 4"
 Powerball: "The winning Powerball numbers are: 57, 21, 19, 48, 34, and the Powerball is 19"  

*/
