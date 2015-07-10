/**
 * Created by MacBookPro on 7/9/15.
 */
//Nicholas Bess, Term: C201507, Assignment: Output Assignment

var myBirthplace = "San Diego, CA."; //Assigns string variable
var myGreeting = "Hi, my name is Nicholas Bess. I was born in";//Assigns string variable
var isMale = true;//Assigns Boolean variable
var birthMonth = "February";//Assigns string variable
var birthDay = 22; //Assigns number variable
var birthYear = 1983; //Assigns number variable
var birthdayGreeting = "I was born on";//Assigns string variable
var farewellGreeting = "That's a \"Tad-bit\" of information about me.";//Assigns string variable containing escape characters
var thankYouMessage = "Thanks for your time.";//Assigns string variable
var finalMessage = "Have a wonderful day!";//Assigns string variable

var greetingMessage = myGreeting + " " + myBirthplace;//Assigns concatenated string
var birthdayMessage = birthdayGreeting + " " + birthDay + " " + birthMonth + " " + birthYear + ".";//Assigns concatenated string
var farewellMessage = farewellGreeting + " " + thankYouMessage + "\n" + finalMessage;//Assigns concatenated string


console.log(greetingMessage);//Tells console to display variable declared by greetingMessage
console.log(birthdayMessage);//Tells console to display variable declared by birthdayMessage
console.log(farewellMessage);//Tells console to display variable declared by farewellMessage