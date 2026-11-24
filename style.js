/*
let number=prompt("یک عدد وارد کنید:");

let sum=0;
for(let i=0;i<=number;i++)
    if(i%2==0){
        console.log(i);
    sum=sum+i;
    }
    console.log("مجموع اعداد زوج:");
    console.log(sum);*/
    

/*let sum=0;

for(let i=0;i<=10;i++)
    if(i%2==1){
        console.log(i);
        sum=sum+i;
    }
    console.log(sum);*/

  /*  
let sum=0
for(let i=0;i<=20;i++)
    if(i%5==0){
        console.log(i);
    sum=sum+i;}
    console.log(sum);*/
/*
let number=parseInt(prompt("enter number:"));

if(number === 12)
{
    console.log("yes is 12");
}
else{
    console.log("error");
}*/
/*
let number1=parseInt(prompt("enter number1:"));
let number2=parseInt(prompt("enter number2:"));
let number3=parseInt(prompt("enter number3:"));

let sum=number1+number2+number3;
let av=sum/3;

console.log("sum:");console.log(sum);
console.log("av:");console.log(av);*/




/*TO DO LIST*/


let users=[
    {name:"yalda"},{name:"abolfazl"},{name:"panah"},{name:"arya"}
];

let username=prompt("enter user name:");

let result=users.find(user=> user.name === username );
if(result)
{
    console.log(result)
}
else{
    console.log("user not found")
};

