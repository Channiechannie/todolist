const clockContainer = document.querySelector(".js-clock"),
    clockTitle =  clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; /* 삼항연산자 사용(작은if) */

}

/* 초기화 과정 */

function init(){
    getTime(); //시간을 얻고
    setInterval(getTime,1000); //시간함수를 사용한다
    

}

init();