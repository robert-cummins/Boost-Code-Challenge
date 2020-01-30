const reverseNumber = (num) => {
    return parseInt(Array.from(num.toString()).reverse().join(''))
}

const checkPalindrome = (num) => {
   let reversed = reverseNumber(num)
   if(num === reversed){
       return true
   }
}

const findHighestPalindrome = () => {
    let palindromeArray = []
    for(i = 100; i <= 999; i++){
        for(j = 100; j <= 999; j++){
            let product = i * j
            if(checkPalindrome(product)){
                palindromeArray.push(product)
            }
        }
    }
    let largestPalindrome = palindromeArray.pop()
    console.log(largestPalindrome)
}

findHighestPalindrome()

// When the file is executed it calls the findHighestPalindrome function. This runs a nested for loop which multiplies all possible 3 digit numbers by each other. For each number, a checkPalindrome function is called. This function takes the number and calls the reverseNumber function. The reverseNumber function reverses the number by first turning the number to a string and making an array from that string. The reverse method is then called and it is converted back to a string and finally back to a number. This reversed number is then checked against the original number and if they are equal, it returns true as a palindrome. When the checkPalindrome function returns true, the number is then pushed to the palindrome Array. Finally, the last element of the palindrome Array, which should be the largest palindrome from the product of two 3 digit numbers is stored as a variable using the .pop() method and logged to the console.