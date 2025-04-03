function palindrome(mystring){

var input = mystring.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
var reversedinput = input.split('').reverse().join('');

if (input === reversedinput){


    document.getElementById("mypalindrome").innerHTML = "the string is a palindrome"

}


else{
    document.getElementById("mypalindrome").innerHTML = "the string is not a palindrome"





}

}


palindrome("mam")