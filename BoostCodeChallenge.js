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

