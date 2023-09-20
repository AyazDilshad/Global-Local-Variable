/*var a = 10;
var b = 3;
var c = (a + b) * 2;
document.write (c);*/
// var x = 50;
// console.log (x);

// var x = 15;
// if (x > 30) {
//     document.write("x is greater");
// } else {
//     document.write("x is smaller");
// }

// var a = 30;
// var b = 15;
// if (a >= 12 ){
//     console.log("Yes You Are eligible")
// }

// var per = 101;
// if(per >= 80 && per <= 100){
//     document.write("You are in Merit.");
// }else if(per >= 60 && per < 80){
//     document.write("You are in 1st Division.");
// }else if(per >= 45 && per < 60){
//     document.write("You are in 2nd Division.");
// }else if(per >= 33 && per < 45){
//     document.write("You are in 3rd Division.");
// }else if(per < 33){
//     document.write("You are Fail.");
// }else {
//     document.write("Please Enter Valid Percentage.");
// }


// var _myName = "Ayaz"
// document.write(_myName);


// var $myName = "Pakistan"
// console.log($myName);
// var myAge = 30;
// var iAmAyaz = true
// console.log(iAmAyaz);

// console.log(typeof(iAmAyaz));

// console.log( 10 + "20");
// console.log( 9 - "5")  //bug
// console.log("java " + "Script");
// console.log( " " + 0 );
// console.log("Ayaz " - "Hashmi");
// console.log( true + true);  ///value is 2 because in javaScript 1 represnt's true/// and 0 represent's false///
// console.log( true + false);    ///value is 1 because in javaScript 1 represnt's true///
// console.log( false - true);  /// value is -1 ///
// console.log( true - false);     //// value is 1 ///

// var iAmUseless = null;
// console.log( iAmUseless);
// console.log(typeof (iAmUseless));  //// data type object its a 2nd Bug ////


// var iAmStandBy;
// console.log(iAmStandBy);
// console.log(typeof (iAmStandBy));

// var myPhoneumber = 3333324192;
// var myName = "ayaz Hashmi"
// console.log( isNaN(myPhoneumber));

// console.log( isNaN(myName));

// NaN === NaN;
// console.log(NaN === NaN);


// var a = prompt ("Enter Your City Name");
// var cityName = "Karachi"
// if( cityName.toLowerCase === "Karachi"){
//     document.write ("Welcome to city of lights")
// }

/// Chapter 9/11///
//Q1//

// var cityName = prompt("Please Enter Your City Name...")
// if(cityName.toLowerCase() == "karachi") {
//     document.write("Welcome to city of lights")
// }



/// Chapter 9/11///
//Q2//

// var gender = prompt("Male or Female?");
// if (gender.toLowerCase() == "male") {
//     document.write("Good Morning Sir,")

// }else{
//     gender.toLowerCase() == "female";
//     document.write("Good Morning Ma’am.")
// }


/// Chapter 9/11///
//Q3//
/*Write a program to take input color of road traffic signal
from the user & show the message according to this table:*/

// var signalLightColor = prompt("Which Color did you see?");
// if (signalLightColor.toLowerCase() == "red") {
//     alert("Must stop")
// } else if (signalLightColor.toLowerCase() == "yellow") {
//     alert(" Ready to move")
// } else if (signalLightColor.toLowerCase() == "green") {
//     alert(" Move now")
// }


var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

