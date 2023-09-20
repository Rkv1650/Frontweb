// write a program to print of a student in an object using for loop
//obj ={monty:89,rahul:90,ram:67,aakas:67}

let obj={
    monty:89,rahul:90,ram:67,aakas:67};
for(let a in obj){
    console.log(a + "is marks " + obj[a] ) 
};
const mean=(a,b,c,d,e)=>{
    return(a+b+c+d)%4
}
console.log(mean(4,5,6,7))
