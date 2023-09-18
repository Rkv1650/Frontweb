// nonprimivative data type
var student={
    name:"rahul kumar",
    class:12,
    roll_number:103,
};
student.city="Delhi";
student.name="Mohit";
delete student.roll_number;
console.log(student);
console.log(typeof(student))
