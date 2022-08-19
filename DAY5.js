//1.anonymous function && IIFE function

//1.print odd number in an array
let arr=[1,3,4,2,5,8,10]
let odd=function(){
    for (let i = 0; i<arr.length; i++){
        if (arr[i]%2!=0){
            console.log("The odd number is:"+arr[i]);
        }
    }
}
odd();

//using IIFE function

(function(){
    for (let i = 0; i<arr.length; i++){
        if (arr[i]%2!=0){
            console.log("The odd number is:"+arr[i]);
        }
    }
})
();

//using IIFE arrow function

(()=>{
    for (let i = 0; i<arr.length; i++){
        if (arr[i]%2!=0){
            console.log("The odd number is:"+arr[i]);
        }
    }
})
();

//2.covert all the strings to title caps in a string array

let student=["vijay","surya","ajith","dhanush"];

let caps = function(){
    for(let i=0; i<student.length; i++){
        let title=student[i][0].toUpperCase()+ student[i].slice(1);
        console.log(title);
    }
}
caps();

//using IIFE  function
(function(){
    for(let i=0; i<student.length; i++){
        let title=student[i][0].toUpperCase()+ student[i].slice(1);
        console.log(title);
    }
})
();

//using IIFE arrow function
(()=>{
    for(let i=0; i<student.length; i++){
        let title=student[i][0].toUpperCase()+ student[i].slice(1);
        console.log(title);
    }
})
();

//3.sum of all numbers in an array:
var sum=[10,15,20,100,70];
var a =0;
let val=function(){
    for(let i =0; i<sum.length; i++){
        
        a = a+sum[i];
    }
    console.log(a);
}
val();

//using IIFE  function
var sum1=[10,15,20,100,70];
var a1 =0;
(function(){
    for(let i =0; i<sum1.length; i++){
        a1 = a1+sum[i];
    }
    console.log(a1);
})
();

//using IIFE arrow function:
var sum2=[10,15,20,100,70];
var a2 =0;
(()=>{
    for(let i =0; i<sum2.length; i++){
        a2 = a2+sum[i];
    }
    console.log(a2);
})
();

//4.return all the prime numbers in an array:
let num=[1,2,3,4,5,23,47,67,48,69,97,66,49,61,75,77,95];
let prime =function(){
    for (let i =1; i<num.length; i++){
       if(num[i]===1){
        console.log(num[i] +" is not a prime number")
       }     
      else if(num[i]/2===1 || num[i]/3===1 || num[i]/5===1 ||num[i]/7===1){
            console.log( num[i] +" is a prime number");
        }
        else if(num[i]%2!=0 && num[i]%3!=0 && num[i]%5!=0 && num[i]%7!=0 ){
            console.log(num[i] + "is a prime number");
        }
    }
}
prime();

//using IIFE  function
(function(){
    for (let i =1; i<num.length; i++){
       if(num[i]===1){
        console.log(num[i] +" is not a prime number")
       }     
      else if(num[i]/2===1 || num[i]/3===1 || num[i]/5===1 ||num[i]/7===1){
            console.log( num[i] +" is a prime number");
        }
        else if(num[i]%2!=0 && num[i]%3!=0 && num[i]%5!=0 && num[i]%7!=0 ){
            console.log(num[i] + "is a prime number");
        }
    }
})
();

//using IIFE arrow function:
(()=>{
    for (let i =1; i<num.length; i++){
       if(num[i]===1){
        console.log(num[i] +" is not a prime number")
       }     
      else if(num[i]/2===1 || num[i]/3===1 || num[i]/5===1 ||num[i]/7===1){
            console.log( num[i] +" is a prime number");
        }
        else if(num[i]%2!=0 && num[i]%3!=0 && num[i]%5!=0 && num[i]%7!=0 ){
            console.log(num[i] + "is a prime number");
        }
    }
})
();


//5.return all the palindromes in array:

let palin=["madam","malayalam","nitin","surya"];
let  fin ="";
let clear="";
let palindrome=function(){
    for (let i=0; i<palin.length; i++){
            fin =clear;
        for(let j=palin[i].length-1;j>=0;j--){
         fin+=palin[i][j]+"";
        }
        if (palin[i]===fin){
      console.log(palin[i] +" "+"is a palindrome");
        }
    else{
         console.log(palin[i] +" "+"is not a palindrome");
        }
        }
    }
palindrome();

//using IIFE  function:
(function(){
    for (let i=0; i<palin.length; i++){
            fin =clear;
        for(let j=palin[i].length-1;j>=0;j--){
         fin+=palin[i][j]+"";
        }
        if (palin[i]===fin){
      console.log(palin[i] +" "+"is a palindrome");
        }
    else{
         console.log(palin[i] +" "+"is not a palindrome");
        }
        }
    })
        ();

 //using IIFE arrow function:
    (()=>{
     for (let i=0; i<palin.length; i++){
                    fin =clear;
                for(let j=palin[i].length-1;j>=0;j--){
                 fin+=palin[i][j]+"";
                }
                if (palin[i]===fin){
              console.log(palin[i] +" "+"is a palindrome");
                }
            else{
                 console.log(palin[i] +" "+"is not a palindrome");
                }
                }
            })
                ();
            

