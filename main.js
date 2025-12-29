// String,Number,Boolean,Object,Array

//1.String
let FirstName = "John Doe ";
console.log('hello,'+ FirstName +'!');
//2.Number

let age = 30;
let height = 5.9;
//3.Boolean 
let isStudent = false;
FirstName = "test";
 console.log('My name is',FirstName,'and I am',age,'years old.');
/*
 let number1 =10;
 let number2 =20;   
let condition1 = number1<=number2; //boolean ค่าtrue,false
 console.log('Result of condition is:',condition1);
 if(number1==number2){
    console.log('This if');
 }else{
    console.log('This else');

 }
*/

/*let score = prompt("ใส่คะแนนของคุณ:");
score = Number(score); //แปลงstringเป็นnumber


if (score >= 80)   {
    console.log('A');    
}else if (score >=70){
    console.log('B');
}
else if (score >=60){
    console.log('C');
}
else if (score >=50){
    console.log('D');
}
else{
    console.log('F');
}//Result = A */
/*let nummber1 =5
let number2 =8
let condition = number1 >= 3    || number2 >= 10; //AND
console.log("condition:",condition);

let age =25;
let gender ="ชาย";
//true && true = true
if(age >=20 &&gender =="ชาย"){
    console.log("คุณเป็นผู้ชายที่มีอายุ20ปีขึ้นไปเป็นผู้ใหย่มากมาก");
}*/
let counter = 0;
while(counter < 10) {
    console.log('hello world');
    counter++;
}

for(let i=0;i<10;i++){
    console.log('hello world from for loop');
}