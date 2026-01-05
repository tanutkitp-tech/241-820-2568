/*function
*/
/*let score1 = 10
let score2 = 80

function calculate_grade(score){
    if (score >= 80) { 
        grade='A'
}else if (score >=70){
        grade='B'
}   
else if (score >=60){
        grade='C'
}   
else if (score >=50){
        grade='D'
}
else{
        grade='F'
}   
}
let grade1 = calculate_grade(score1)
let grade2 = calculate_grade(score2)
console.log('Score1: ' + score1 + ', Grade: ' + grade1)
console.log('Score2: ' + score2 + ', Grade: ' + grade2) */
/*
let score=[90,80,70,60,50];
let newscore =[];
for (let i=0; i<score.length; i++){
   console.log(score[i]);
    //if (score[i]>=60){
      //  newScore.push(score[i]);
        }
let newscore =score.filter(function(score){
    return score >= 70;
});
newscore.forEach(ns => {
        console.log('New Score: ' + ns);
})*/
let students = [
        {name: 'John', age : 20, grade: "A"},
        {name: 'Jane', age : 22, grade: "B"},
        {name: 'Jim', age : 21, grade: "C"},
]
console.log('Student',students[0]);

let student = student.find((s) => {
        return s.name === "jim";
});
console.log('Found Student:', student);