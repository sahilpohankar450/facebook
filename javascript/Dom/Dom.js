var num8=80; //outer scope

function printMyMessage(sahil){
    console.log(sahil);
}

function externalMessage() {
    var num5=50;
    alert ("Welcome from outside ! !");


{
    console.log(num5);
   
    let num6=60;
    console.log(num6);//60

    const num7=70;
    console.log(num7); //70

    var num9=90;
    console.log(num9);  //90
}


//console.log(num6);  //Block scope, Uncaught RefrenceError : num6 is not defined

//console.log(num7);  //Block scope, Uncaught RefrenceError : num7 is not defined

//num is visible througout my function

console.log(num5);  //50

console.log(num8); //inner scope; Lexical scoping;
console.log(num9); //90 , functional scope;


let abhiraj = "welcome to the  class !!";
printMyMessage(abhiraj);
}
//console.log(num5); //.uncaught RefrenceError: num5 is not defined
//console.log(num6); //.uncaught RefrenceError: num5 is not defined
//console.log(num7); //.uncaught RefrenceError: num5 is not defined
//console.log(num8);



/************** Funcation scope vs block scope  Example ******************

Scope : reference to the visibility of a variable

var a = 10;

fincation name1(1) {
        let b = 20;
        ver c= 30;

        if (true) {
           let d =40:
           var e=50;
        }
            
        console.log(a); // 10, lexical scoping
        console.log(b); // 20, block scoping
        console.log(c); // 30, funcation scoping
        console.log(d); // Error : d has a block scope
        console.log(e); // 50, e has a funcational scope
}

name1();

console.log(a); //10, funcation scope
console.log(b); // Error, block scope
console.log(c);// Error, block scope
console.log(b);// Error, block scope
console.log(e);// e,has has funcational scope  */


//*********************** New ***************************** 
function changemycompany() {
    let element = document.getElementById("myDiv");
     // change the context of the elemet
     element.innerHTML  = "welcome to facebook !!";
     //console log
     console.log("I changed my company");
     //alert the data
     alert("welcome to the company");
}
function askforinput(){
    let userName = window.prompt("What is your good name");
    let element = document.getElementById("username");
    element.innerHTML=userName;

}

function deletepost(){
    let elements=document.getElementsByClassName("btnclass");
    let confirm=window.confirm("Are you want to delete");
    let element=document.getElementById("username");
    if(confirm)
    {
        element.innerHTML="this post has been  deleted";
    }else{
        element.innerHTML="this post has  not deleted";
    }
}

/********************** output stmentes in js ***********************

(1) console.log();
(2)document.write();
(3) innerHTML;
(4) windows.alert () /alert();

/********************** input statements in js **********************

(1) window.confirm:will ask for a boolean(yes or no)
    Returns: true if yes, false if no.

(2) window.prompt:user can enter free text(descriptive input)  
*/