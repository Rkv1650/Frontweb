// switch use s like that if else it is best way to conditanal way
let marks="D";
switch (marks) {
    case "A":
        console.log("Grade A")
        
        break;
        case "B":
            console.log("Grade B")
            break;
        case "C":
            console.log("Grade C")
            break;
        case "D":
            console.log("Grade D")
            break;

    default:
        console.log("No Data found")
        break;
};
// Q1 write a javascript program display today  "Day"
// console.log(new Date().getDay());/
switch (new Date().getDay()) {
    case 1:
        console.log("Today is Monday");
         break;
    case 2:
            console.log("Today is Tuesday");
             break;
    case 3:
             console.log("Today is Wednesday");
             break;
    case 4:
            console.log("Today is Thursday");
            break;
    case 5:
           console.log("Today is Friday");
            break;
    case 6:
            console.log("Today is Saturday");
             break;
    case 7:
            console.log("Today is Sunday");
             break;
    default:
        console.log("Today is No data match");
        break;
}
var myDate=new Date();
console.log(myDate)
const month = new Date().getMonth();
console.log(month)
console.log("Heloo")