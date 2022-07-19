// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.


let min = function(list){
    list.sort((a,b) => a-b)// sorts the array in ascending order 
    return list[0] // the min number has the first index
}

let max = function(list){
    list.sort((a,b) => b-a)// sorts the array in descending order
    return list[0]  // the max number has the first index
}

// or
let min = function(list){
   return Math.min(...list)
}

let max = function(list){
   return Math.max(...list)
}