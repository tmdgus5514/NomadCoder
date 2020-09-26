const clockContainer = document.querySelector(".js-clock"),
 clockTitle =  clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText =  `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}`: minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}    //ternary operator(삼항연산자)or mini if
function init(){
    getTime();
    setInterval(getTime, 1000);//setInterval(함수,시간간격)->시간은 ms 기준

}

init();