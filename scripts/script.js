let resSlide = document.querySelectorAll(".residential__item");
let resButtonLeft = document.querySelector("#rbl");
let resButtonRight = document.querySelector("#rbr");

let comSlide = document.querySelectorAll(".commercial__item");
let comButtonLeft = document.querySelector("#cbl");
let comButtonRight = document.querySelector("#cbr");

let disable = "opacity: 0.2;cursor: not-allowed;";
let visible = "opacity: 1;cursor: pointer";

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
  moveCommercial("rightCom");
};

comButtonRight.onclick = () => {
  moveCommercial("leftCom");
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
let elCom = document.getElementById("commercial__items");
let x1 = 0;
let move = 0;
let moveLimit = 0;
let direction = 0;

let x1Com = 0;
let moveCom = 0;
let moveComLimit = 0;
let directionCom = 0;

let resPaginationCurrent = 0;
let resPaginationColored = document.querySelectorAll(".residential__circle");

let comPaginationCurrent = 0;
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
if (window.innerWidth > 650) {
  maxMoveRes = 3 * moveCalc;
  resPaginationColored[4].style.display = "none";
  resPaginationColored[5].style.display = "none";
} else if (window.innerWidth < 650 && window.innerWidth > 493) {
  maxMoveRes = 4 * moveCalc;
  resPaginationColored[5].style.display = "none";
} else {
  maxMoveRes = 5 * moveCalc;
}

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
  resPaginationCurrent = -countMoveRes / moveCalc;
  resPaginationColored.forEach((element) => {
    element.classList.remove("filled");
  });
  resPaginationColored[resPaginationCurrent].classList.add("filled");
}

elCom.addEventListener("touchstart", handleTouchStartCom, false);
elCom.addEventListener("touchmove", handleTouchMoveCom, false);
elCom.addEventListener("touchend", handleTouchEndCom, false);

function handleTouchStartCom(eventCom) {
  let firstTouchCom = eventCom.touches[0];
  x1Com = firstTouchCom.clientX;
}

function handleTouchMoveCom(eventCom) {
  if (!x1Com) {
    return false;
  }
  if (window.screen.width > 767) {
    moveComLimit = (comSlide.length - 4) * -120;
  } else if (window.screen.width < 450) {
    moveComLimit = (comSlide.length - 3) * -120;
  } else {
    moveComLimit = (comSlide.length - 1) * -120;
  }
  let x2Com = eventCom.touches[0].clientX;
  let xDiffCom = x2Com - x1Com;
  if (Math.abs(xDiffCom) > 20) {
    if (xDiffCom > 0) {
      directionCom = "rightCom";
    } else if (xDiffCom < 0) {
      directionCom = "leftCom";
    }
    handleTouchEndCom;
  }
}

function handleTouchEndCom(eventCom) {
  moveCommercial(directionCom);
  xDiffCom = null;
  directionCom = null;
}
let moveCalcCom = 140;
let countMoveCom = 0;
let maxMoveCom = 0;
if (window.innerWidth > 650) {
  maxMoveCom = 2 * moveCalcCom;
  console.log(maxMoveCom);
  comPaginationColored[3].style.display = "none";
  comPaginationColored[4].style.display = "none";
} else if (window.innerWidth < 650 && window.innerWidth > 493) {
  comPaginationColored[4].style.display = "none";
  maxMoveCom = 3 * moveCalcCom;
} else {
  maxMoveCom = 4 * moveCalcCom;
}
comPaginationColored[resPaginationCurrent].classList.add("filled");

function moveCommercial(directionCom) {
  if (directionCom == "leftCom" && countMoveCom > -maxMoveCom) {
    countMoveCom -= moveCalcCom;
    comButtonLeft.style = visible;
    countMoveCom === -maxMoveCom
      ? (comButtonRight.style = disable)
      : (comButtonRight.style = visible);
  } else if (directionCom == "rightCom" && countMoveCom < 0) {
    countMoveCom += moveCalcCom;
    comButtonRight.style = visible;
    countMoveCom === 0
      ? (comButtonLeft.style = disable)
      : (comButtonLeft.style = visible);
  }
  for (let i = 0; i < comSlide.length; i++) {
    comSlide[i].style.transform = "translateX(" + countMoveCom + "px)";
    comSlide[i].style.transition = "0.5s";
  }
  comPaginationCurrent = -countMoveCom / moveCalcCom;
  comPaginationColored.forEach((element) => {
    element.classList.remove("filled");
  });
  comPaginationColored[comPaginationCurrent].classList.add("filled");
}
