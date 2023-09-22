// varibles is a globle scoped while let and const block scoped 
// var is a redeclare and update value
// let is not redeclare but assining the new value
// const can neither be update and redeclare
var student={
    name :" ram",
    name:"mohit"
};
console.log(student);
student.class=12;
student.name="Ram Ji";
console.log(student);
delete student.name ;
console.log(student);
console.log(typeof (student))
//02  let

let name =`ramji`;
name="suraj ";
console.log(name)
console.log(typeof(name))
// 03 Const
const number = "13";
console.log(number)
console.log(typeof(number))