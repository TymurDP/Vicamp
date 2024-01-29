let resSlide = document.getElementsByClassName("residential__item");
let resButtonLeft = document.getElementById("rbl");
let resButtonRight = document.getElementById("rbr");

let comSlide = document.getElementsByClassName("commercial__item");
let comButtonLeft = document.getElementById("cbl");
let comButtonRight = document.getElementById("cbr");

let disable = 'opacity: 0.2;cursor: not-allowed;';
let visible = 'opacity: 1;cursor: pointer';


let slideClick = 0;
let k = 0;

let slideClickCom = 0;
let kCom = 0;

let transTranslate = 130;
resButtonLeft.style = disable;
comButtonLeft.style = disable;

let dropButton = document.getElementsByClassName("dropButton");
let dropText = document.getElementsByClassName("dropText");


document.getElementById("rbl").onclick = function () {
    if (slideClick < 0) {
        slideClick++;
        k = slideClick * transTranslate;
        for (let i = 0; i < resSlide.length; i++) {resSlide[i].style = 'transform: translate(' + k + 'px);';}
        resButtonRight.style = visible;
        if (slideClick === 0) { resButtonLeft.style = disable;}
    } else { resButtonLeft.style = disable;}
} 
    
document.getElementById("rbr").onclick = function () {
    if (slideClick > -3) {
        slideClick--;
        k = slideClick * transTranslate;
        for (let i = 0; i < resSlide.length; i++) {resSlide[i].style = 'transform: translate(' + k + 'px);';}
        resButtonLeft.style = visible;
        if (slideClick === -3) {resButtonRight.style = disable;}
    } else {resButtonRight.style = disable;}
}

document.getElementById("cbl").onclick = function () {
    if (slideClickCom < 0) {
        slideClickCom++;
        kCom = slideClickCom * transTranslate;
        console.log(kCom);
        for (let i = 0; i < comSlide.length; i++) {comSlide[i].style = 'transform: translate(' + kCom + 'px);';}
        comButtonRight.style = visible;
        if (slideClickCom === 0) { comButtonLeft.style = disable;}
    } else { comButtonLeft.style = disable;}
} 
    
document.getElementById("cbr").onclick = function () {
    if (slideClickCom > -2) {
        slideClickCom--;
        kCom = slideClickCom * transTranslate;
        for (let i = 0; i < comSlide.length; i++) {comSlide[i].style = 'transform: translate(' + kCom + 'px);';}
        comButtonLeft.style = visible;
        if (slideClickCom === -2) {comButtonRight.style = disable;}
    } else {comButtonRight.style = disable;}
}

for (let i = 0; i < dropButton.length; i++) {
    dropText[i].style.display = 'none';
    dropButton[i].onclick = function () {
        if (dropText[i].style.display == 'none') {
            dropText[i].style.display = 'block';
            dropButton[i].style = 'transform: rotate(180deg);transition: 0.3s;';
        } else {
            dropText[i].style.display = 'none';
            dropButton[i].style = 'transform: rotate(0deg);transition: 0.3s;';
    }
    
    }

}
