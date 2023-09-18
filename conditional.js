// Conditional statements are used to perform different actions based on different conditions.
a=20;
b=30;
if(a>b){
console.log("a is greater then b");
} else if(b>a){
    console.log("B is greater then A")
} else{
    console.log("B is ecqual to A")
}
// Q 2
// . Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
a=0;
b=-1;
c=4;
if(a>b && a>c){
    console.log(a+','+b +"," +c);
}else if(b>a && b>c){
    console.log(b +","+c +','+a)
}else if(c>a && c>b){
    console.log(c+","+a +"," +b)
}else{
    console.log("Not match Condition")
}
// 3. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

a=-5;
b=-2;
c=-6;
d=0;
e=-1;
if (a>b && a>c && a>d && a>e){
    console.log(a)
} else if(b>a && b>c && b>d && b>e){
    console.log(b)
} else if(c>a && c>b && c>d && c>e){
    console.log(c)
} else if(d>a && d>c && d>b && d>e){
    console.log(d)
} else if(e>a && e>c && e>d && e>b){
    console.log(e)
}else{
    console.log("not data match")
}

// / The grades are computed as follows  use a conditional statement:

// Range	Grade
// <60	     F
// <70	     D
// <80      C
// <90	    B
// <100   	A


var num=60;
if(num>90 && num<=100){
    console.log("Grade A")
} else if(num>80 && num<=90){
    console.log("Grade B")
} else if(num>70 && num<=80){
    console.log("Grade C")
} else if(num>60 && num<=70){
    console.log("Grade D")
} else if(num>50 && num<=60){
    console.log("Grade F")
}else{
    console.log('Not found')
};