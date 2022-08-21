//1.arrow function 

//1.print odd number in an array
let arr1=[1,3,4,2,5,8,10]
let odd1=()=>{
    for (let i = 0; i<arr1.length; i++){
        if (arr1[i]%2!=0){
            console.log("The odd number is:"+arr1[i]);
        }
    }
}
odd1();

//2.covert all the strings to title caps in a string array

let student1=["vijay","surya","ajith","dhanush"];

let caps1 = ()=>{
    for(let i=0; i<student1.length; i++){
        let title=student1[i][0].toUpperCase()+ student1[i].slice(1);
        console.log(title);
    }
}
caps1();

//3.sum of all numbers in an array:
var sum1=[10,15,20,100,70];
var a1 =0;
let val1=()=>{
    for(let i =0; i<sum1.length; i++){
        
        a1 = a1+sum1[i];
    }
    console.log(a1);
}
val1();

//4.return all the prime numbers in an array:
let num1=[1,2,3,4,5,23,47,67,48,69,97,66,49,61,75,77,95];
let prime1 =()=>{
    for (let i =1; i<num1.length; i++){
       if(num1[i]===1){
        console.log(num1[i] +" is not a prime number")
       }     
      else if(num1[i]/2===1 || num1[i]/3===1 || num1[i]/5===1 ||num1[i]/7===1){
            console.log( num1[i] +" is a prime number");
        }
        else if(num1[i]%2!=0 && num1[i]%3!=0 && num1[i]%5!=0 && num1[i]%7!=0 ){
            console.log(num1[i] + "is a prime number");
        }
    }
}
prime1();

//5.return all the palindromes in array:

let palin1=["madam","malayalam","nitin","surya"];
let  fin1 ="";
let clear1="";
let palindrome1=()=>{
    for (let i=0; i<palin1.length; i++){
            fin1 =clear1;
        for(let j=palin1[i].length-1;j>=0;j--){
         fin1+=palin1[i][j]+"";
        }
        if (palin1[i]===fin1){
      console.log(palin1[i] +" "+"is a palindrome");
        }
    else{
         console.log(palin1[i] +" "+"is not a palindrome");
        }
        }
    }
palindrome1();
