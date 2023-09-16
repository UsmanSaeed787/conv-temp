"use strict";
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function cTofTemp(temp) {
    //var temp: number = 36;
    var tempF = temp * (9 / 5) + 32;
    console.log("Temoerature in F :", tempF);
}
cTofTemp(36);
cTofTemp(40);
