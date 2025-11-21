function runScript(){

document.write("<h3>Current Date is: </h3>");
document.write(Date());
document.write("<h3>Generate a random number: </h3>");
document.write(Math.random());

document.write("<h3>Define variables and perform calculations: </h3>");
var str1="Hello World";
document.write(str1);
document.write("<br>");
var x=5; 
document.write(x);
document.write("<br>");
var y=10;
var z=x+y;
document.write(z);
document.write("<br>");

function sum3(x1,x2,x3){
	var sum=0;
    sum=x1+x2;
    sum=sum+x3;
	return sum;
}
var z1=0;
z1=sum3(5,6,7);
document.write(z1);
}