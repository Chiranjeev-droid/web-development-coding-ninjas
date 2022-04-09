//const a=10; //const are used to declare readonly variables
var b=10; //both read and write operatinos can be permormed with help of var.
console.log(a); //const value can't be changed.
var c;
console.log(c) // will print undefined

//const d;//will print an error saying const require initializer.
//hoisting does happen in case of const but it happens in different manner. In case of const, you cannot access const variable until and unless at runtime, their definition and declaration is reached(const c=30 statement)

var a =10;
if(a<=10){
    var b=40;
}
else{
    var c=50;
}
console.log(a,b,c); //output: 10 40 undefined
//hoisting has happened so b and c are moved upwards and so are available in global scope

//with the help of let , we can create variables in block scope means they will be available only within the enclosing block.

var e =10;
if(e<=10){
    let f=40;
}
else{
    var g=50;
}
console.log(e,f,g); // f is not defined as we have used let so f will be available only within block scope.
// 
console.log(h)
var h= 10;
if(h<=10){
    console.log(b);
    let b = 20;// error=> you cannot use let before the definition to "let" has actually been run at run time.
}