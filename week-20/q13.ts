// Write a program to identify whether a string is a palindrome or not

const str = prompt("Enter a string: ")!.trim().toLowerCase()

let l = 0
let r = str.length - 1
let isPalindrome = true

while (l < r) {
    if (str[l] !== str[r]) {
        isPalindrome = false
        break
    }
    l++
    r--
}

if (isPalindrome) {
    console.log(`${str} is palindrome`)
} else {
    console.log(`${str} is not palindrome`)

}