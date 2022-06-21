// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    return String(n).split('').reverse().map((x) => Number(x))
}

// or

function digitize(n) {
    return Array.from(String(n), Number).reverse()
}

// String(n) converts it n to ['2', '3', '4'] then Number converts it to [2,3,4]
