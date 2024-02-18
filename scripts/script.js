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
  moveResidential("right");
};

resButtonRight.onclick = () => {
  moveResidential("left");
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

let el = document.getElementById("residential__items");
let x1 = 0;
let move = 0;
let moveLimit = 0;
let direction = 0;

let resPaginationCurrent = 0;
let resPaginationColored = document.querySelectorAll(".residential__circle");

let comPaginationCurrent = 0;
let comPaginationPrev = 0;
let comPaginationColored = document.querySelectorAll(".commercial__circle");

el.addEventListener("touchstart", handleTouchStart, false);
el.addEventListener("touchmove", handleTouchMove, false);
el.addEventListener("touchend", handleTouchEnd, false);

function handleTouchStart(event) {
  let firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
}

function handleTouchMove(event) {
  if (!x1) {
    return false;
  }
  if (window.screen.width > 767) {
    moveLimit = (resSlide.length - 4) * -120;
  } else if (window.screen.width < 450) {
    moveLimit = (resSlide.length - 3) * -120;
  } else {
    moveLimit = (resSlide.length - 1) * -120;
  }
  let x2 = event.touches[0].clientX;
  let xDiff = x2 - x1;

  if (Math.abs(xDiff) > 20) {
    if (xDiff > 0) {
      direction = "right";
    } else if (xDiff < 0) {
      direction = "left";
    }
    handleTouchEnd;
  }
}

function handleTouchEnd(event) {
  moveResidential(direction);
  xDiff = null;
  direction = null;
}
let moveCalc = 140;
let countMoveRes = 0;
let maxMoveRes = 0;
let resPag = 0;
if (window.innerWidth > 650) {
  maxMoveRes = 3 * moveCalc;
  // resPag = 3;
} else if (window.innerWidth < 650) {
  maxMoveRes = 4 * moveCalc;
  // resPag = 2;
} else if (window.innerWidth < 300) {
  maxMoveRes = 5 * moveCalc;
  // resPag = 1;
}

// resPaginationCurrent = resPag;
resPaginationColored[resPaginationCurrent].classList.add("filled");

function moveResidential(direction) {
  if (direction == "left" && countMoveRes > -maxMoveRes) {
    countMoveRes -= moveCalc;
    resButtonLeft.style = visible;
    countMoveRes === -maxMoveRes
      ? (resButtonRight.style = disable)
      : (resButtonRight.style = visible);
  } else if (direction == "right" && countMoveRes < 0) {
    countMoveRes += moveCalc;
    resButtonRight.style = visible;
    countMoveRes === 0
      ? (resButtonLeft.style = disable)
      : (resButtonLeft.style = visible);
  }
  for (let i = 0; i < resSlide.length; i++) {
    resSlide[i].style.transform = "translateX(" + countMoveRes + "px)";
    resSlide[i].style.transition = "0.5s";
  }
  console.log(countMoveRes);
  resPaginationCurrent = -countMoveRes / moveCalc + resPag;
  resPaginationColored.forEach((element) => {
    element.classList.remove("filled");
  });
  resPaginationColored[resPaginationCurrent].classList.add("filled");
}

let elCom = document.getElementById("commercial__items");
let xCom = 0;
let moveCom = 0;
let moveComLimit = 0;

elCom.addEventListener("touchstart", handleTouchStartCom, false);
elCom.addEventListener("touchmove", handleTouchMoveCom, false);

function handleTouchStartCom(eventCom) {
  let firstTouchCom = eventCom.touches[0];
  x1Com = firstTouchCom.clientX;
}

function handleTouchMoveCom(eventCom) {
  if (!x1Com) {
    return false;
  }
  if (window.screen.width > 420) {
    moveComLimit = (comSlide.length - 2) * -120;
  } else {
    moveComLimit = (comSlide.length - 1) * -120;
  }

  let x2Com = eventCom.touches[0].clientX;
  let xDiffCom = x2Com - x1Com + moveCom;
  if (xDiffCom > 0) {
    moveCom = 0;
  } else if (xDiffCom < moveComLimit) {
    moveCom = moveComLimit;
  } else moveCom = xDiffCom;
  let comPagination = Math.round(xDiffCom / 120);
  comPaginationCurrent = comPaginationPrev - comPagination;
  comPaginationColored[comPaginationCurrent].classList.add("fill");

  for (let i = 0; i < comSlide.length; i++) {
    comSlide[i].style = "transform: translate(" + moveCom + "px);";
    if (comPaginationColored[i].classList.contains("fill")) {
      comPaginationColored[i].classList.remove("fill");
    }
    comPaginationColored[comPaginationCurrent].classList.add("fill");
  }
}
comPaginationPrev = comPaginationCurrent;
