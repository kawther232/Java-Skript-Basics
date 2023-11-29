document.querySelector('form').addEventListener('submit', checkAge);

const license = 18;
const jrop= 16;
const rental = 25;

// let myAge= 6;

function checkAge(e) {   
    e.preventDefault();

    let myAge= document.querySelector('input').value;

    let message = "";

    console.log('RUNNING...'+myAge);


    if(myAge < license && myAge >= jrop){
       message+= `<li>you can have a JrOp License<li/>`;
    }


    if(myAge >= license){
        message+=`<li>you can have a regular license<li/>`;
    }
    
    

    if(myAge >= rental){
       message += `<li>you can rent a car<li/>`;
    }



    if(myAge<jrop){
        message +=`<li>You're too young<li/>`;
    }
    document.querySelector('#output').innerHTML = message;
}
//checkAge(45);
//checkAge(6);
//checkAge(14);
//checkAge(6);