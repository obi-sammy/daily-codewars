// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}
// the difference between split(' ') and split('')
// example let str = 'This is'
// str.split(' ') = ['This', 'is']
// str.split('') = ['T','h','i','s','i','s']
// str.split() = ['This is']

// or

function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ')
}
  