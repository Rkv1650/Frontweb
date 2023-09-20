// loops >in witch a code again to again  execute code
// for loop >
// it is used to fixed time execute code 
// while loop->in which a code execute when one condition is not true 
// do while loop-> minimam one time code execute 

// Q1> use for loop and print 1 to 100 numbers

for(let i=1; i<=100; i++){
    console.log(i)
};
// Q2 use for in loop object and print marks
let student={
    ramji:89,
    suman:78,
    Nahi:45,
    ruhi:90,
    mamta:67,
};
for(let a in student){
    console.log(a + "is Marks " + student[a])
}
// program to generate a multiplication table

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}