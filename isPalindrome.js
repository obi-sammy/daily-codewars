// Write a function that checks if a given string (case insensitive) is a palindrome.


function isPalindrome(x) {
    reversed = x.split('').reverse().join('')
    if(reversed.toLowerCase() == x.toLowerCase()){
      return true
    } else {
      return false
    }
}

