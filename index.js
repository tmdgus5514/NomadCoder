console.log('Im Working. Im beautiful.');
const a =221;
let b= a-5;
console.log(b); 
const shInfo = {name:"seunghyun",
                age:23,
                live:"bucheon",
                University:"catholic",
                gender:"Female"}

console.log(shInfo.age);

/*function sayHello(name,age){
   return `Hello! ${name} you are ${age} years old`;

}//자바 스크립트에서는 ""''나 둘다 string 으로 인식``->벡틱

const greetNocolas =sayHello("Nicolas", 14)

console.log(greetNocolas);*/

const calculator = {
    plus: function(x,y){
        return x + y;
    },
    minus: function(x,y){
        return x-y;
    },
    power: function(x,y){
        return x**y;
    },
    devide: function(x,y){
        return x/y;
    },
    


}

const plus = calculator.plus(5,5)
const minus = calculator.minus(5,7)
const power = calculator.power(2,3)
const devide = calculator.devide(4,2)

console.log(plus);
console.log(minus);
console.log(power);
console.log(devide);

//html과 js 함꼐 쓰는법
const title = document.getElementById("title");

console.log(title);

//DOM//document object module
console.error("fuck");//모든 html은 js 안에서 객체가 된다.
title.innerHTML = "Hi From JS";
console.dir("title")

function handleClick(){
    const currentClass= title.className;
    if(currentClass !==CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className ="";
    }
}

const CLICKED_CLASS = "clicked";

//if는 같다할때 === 3개를 쓴다
function init() {
    title.addEventListener("click", handleClick);
}
init();