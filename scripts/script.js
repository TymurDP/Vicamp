let resSlide = document.querySelectorAll(".residential__item");
let resButtonLeft = document.querySelector("#rbl");
let resButtonRight = document.querySelector("#rbr");

let comSlide = document.querySelectorAll(".commercial__item");
let comButtonLeft = document.querySelector("#cbl");
let comButtonRight = document.querySelector("#cbr");

let disable = "opacity: 0.2;cursor: not-allowed;";
let visible = "opacity: 1;cursor: pointer";

let slideClick = 0;
let k = 0;

let slideClickCom = 0;
let kCom = 0;

let transTranslate = 135;
resButtonLeft.style = disable;
comButtonLeft.style = disable;

let dropButton = document.querySelectorAll(".dropButton");
let dropText = document.querySelectorAll(".dropText");

resButtonLeft.onclick = () => {
  if (slideClick < 0) {
    slideClick++;
    k = slideClick * transTranslate;
    for (let i = 0; i < resSlide.length; i++) {
      resSlide[i].style = "transform: translate(" + k + "px);";
    }
    resButtonRight.style = visible;
    slideClick === 0
      ? (resButtonLeft.style = disable)
      : (resButtonLeft.style = visible);
  }
};

resButtonRight.onclick = () => {
  if (slideClick > -3) {
    slideClick--;
    k = slideClick * transTranslate;
    for (let i = 0; i < resSlide.length; i++) {
      resSlide[i].style = "transform: translate(" + k + "px);";
    }
    resButtonLeft.style = visible;
    slideClick === -3
      ? (resButtonRight.style = disable)
      : (resButtonRight.style = visible);
  }
};

comButtonLeft.onclick = () => {
  if (slideClickCom < 0) {
    slideClickCom++;
    kCom = slideClickCom * transTranslate;
    for (let i = 0; i < comSlide.length; i++) {
      comSlide[i].style = "transform: translate(" + kCom + "px);";
    }
    comButtonRight.style = visible;
    slideClickCom === 0
      ? (comButtonLeft.style = disable)
      : (comButtonLeft.style = visible);
  }
};

comButtonRight.onclick = () => {
  if (slideClickCom > -2) {
    slideClickCom--;
    kCom = slideClickCom * transTranslate;
    for (let i = 0; i < comSlide.length; i++) {
      comSlide[i].style = "transform: translate(" + kCom + "px);";
    }
    comButtonLeft.style = visible;
    slideClickCom === -2
      ? (comButtonRight.style = disable)
      : (comButtonRight.style = visible);
  }
};

for (let i = 0; i < dropButton.length; i++) {
  dropText[i].style.display = "none";
  dropButton[i].onclick = () => {
    if (dropText[i].style.display == "none") {
      dropText[i].style.display = "block";
      dropButton[i].style = "transform: rotate(180deg);transition: 0.3s;";
    } else {
      dropText[i].style.display = "none";
      dropButton[i].style = "transform: rotate(0deg);transition: 0.3s;";
    }
  };
}

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let iconTouch = document.querySelector(".residential__item");

function handleTouchStart(event) {
  console.log(event);
}

function handleTouchMove(event) {
  console.log(event);
}
