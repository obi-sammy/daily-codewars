// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('!').join('')
}

// or

function removeExclamationMarks(s) {
    return s.replace(/!/g, '')
}
// This solution uses replace method which only replaces once(one exclamation mark) then it uses regex(regular expression) with the global scope to replace all exclamation marks

// or

function removeExclamationMarks(s) {
    return s.replaceAll('!', '')
}
// Instead of having to use the regex, In ES6 replaceAll was introduced and it replaces all the exclamation marks