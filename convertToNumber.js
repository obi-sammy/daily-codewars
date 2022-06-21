// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


var stringToNumber = function(str){
    // put your code here
    return Number(str);
}

// or

var stringToNumber = function(str){
    return parseInt(str);
}

// or

var stringToNumber = function(str){
    return +str;
}