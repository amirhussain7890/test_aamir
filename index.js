//Write a function that accepts a string as a parameter and converts the first letter of each word of string in uppercase.

const convertFirstLetter=(string)=>{

    let upperValue='string'.charAt[0].toUpperCase()
    return upperValue;
}

// q2. Create a function that removes duplicate characters from a string and returns the result.

const duplicate=(string)=>{
    let result=Array.from(new Set(string.split(''))).join('')
    return result;
}

// q3. Write a function to add all the numbers in an array.


const add=(arr)=>{
    return arr.reduce((accu, curr)=>accu+=curr,0);
}


// q5.Write a function to check string is palindrome or not.

const polindromeCheck=(str)=>{
    let reverseStr=str.split('').reverse().join('')
    return str===reverseStr;
}


// q4. In an array of numbers and strings, only add those members which are not strings.

const addArrayString=(arr)=>{
    let desiredResult=arr.filter((value)=>{
        return typeof value===Number
    }).reduce((accu, curr)=>accu+=curr,0)
}


// ReactJs Qeustions

// q1. 