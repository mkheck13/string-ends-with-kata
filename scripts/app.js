// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// we should be able to get it in the return
// we will want to use slice to remove the rest of the str and just leave the ending
// if whats left matches then its true
// if it doesn't match then its false
// 
function solution(str, ending){
    return str.slice(str.length - ending.length) === ending;
}


// going to see if there is a method that checks one string against another one to see if its in it
// found a new method .endsWith()
// checks to see if what you pass thru is in the string
function solution(str, ending){
    return str.endsWith(ending);
}