// Function --> a set or collection of code or statement or Intersection  which are used to particuler action task
const someInformation=()=>{
    console.log("Hi Rahul Kumar");
};
someInformation()
// console.log(someInformation()) undefined


// function with a parameters
const login=(username,passward)=>{
    console.log("User name is " + "" +username );
    console.log(`passwar is ` + passward);

};
login("rahul","Rahul@1650");

// find a area use a function method
const calculateArea=(width,height=1)=> {
    const area=width*height;
    return area;    
};
const area=calculateArea(60);
console.log(area);
const totalArea=(width,height)=> {
    const mut =width*height;
    return mut;    
};
const mut=totalArea(60,60);
console.log(mut);
// write a function to find mean of 5 number
const sumeTotal=(a,b,c,d,e)=>{
    const sum=a+b+c+d+e;
    return sum;
};
const sum=sumeTotal(3,7,8,9,30);
console.log(sum)
// virables function
const downlod=()=>{
    const fileNmae="xyz.pdf"
    console.log(fileNmae)
}
downlod()
