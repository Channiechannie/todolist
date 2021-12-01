const body = document.querySelector("body");

const IMG_NUMBER = 3; /* 원하는 숫자 기입 */

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;   
}
/* 숫자 랜덤 함수를 응용하여 해봄
Math.random() 응용 > Math.floor (반대개념: Math.ceil floor는 버림, ceil는 올림)
ex) Math.floor(Math.random() * 반복횟수); */

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}



init();