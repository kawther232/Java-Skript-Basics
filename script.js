console.log("Hello World");

//Weird Scope - Dont Use
//var x = 5;
//Regular old varible

let y=6;
y=10;//You can change the value

const z = 7;//This is a consyany. Can't be changed 
//z=10;// this throws an error
console.log(y,z)
console.log(y+z)
console.log(y-z)
console.log(y*z)
console.log(y/z)
console.log(y%z)// this does division but returns the remainder
console.log(y**z)//exponents

let fname="Kawther";
let lname="Naji";
console.log(fname+" "+lname)

console.log(`${ fname } ${ lname }`);
console.log(`${ fname } ${ 5*9 }`);
console.log(lname+ 6);
let user="kawtherr";
let pass="boo";
user="kawwther"
if ( user=="kawtherr"){
    console.log(`you are `+ user);

}else{
    console.log("DENIED")
}

user="kawwther"
if ( user=="kawwther" && pass =="foo"){
    console.log(`you are `+ user+ 'and your pass is'+pass);

}else{
    console.log("DENIED")
}






const license = 18;
const jrop= 16;
const rental = 25;

// let myAge= 6;

function checkAge(myAge) {
    console.log('RUNNING')
    if(myAge < license && myAge >= jrop){
        console.log('you can have a JrOp License');

    }
    if(myAge >= license){
        console.log('you have a regular license');

    }   
    if(myAge >= rental){
        console.log('you can rent a car');

    }
    if(myAge<jrop){
        console.log('you are too young');


    }
}
checkAge(45);
checkAge(6);
checkAge(14);
checkAge(6);