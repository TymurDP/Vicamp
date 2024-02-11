let resSlide = document.querySelectorAll(".residential__item");
let el = document.getElementById("items");
let x1 = 0;
let move = 0;
let moveLimit = 0;
let resPaginationCurrent = 0;
let resPaginationPrev = 0;
let resPaginationColored = document.querySelectorAll(".circle");
resPaginationColored[resPaginationCurrent].classList.add("fill");

el.addEventListener("touchstart", handleTouchStart, false);
el.addEventListener("touchmove", handleTouchMove, false);

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
  } else if (window.screen.width > 450) {
    moveLimit = (resSlide.length - 2) * -120;
  } else {
    moveLimit = (resSlide.length - 1) * -120;
  }
  let x2 = event.touches[0].clientX;
  let xDiff = x2 - x1 + move;
  if (xDiff > 0) {
    move = 0;
    xDiff = 0;
  } else if (xDiff < moveLimit) {
    move = moveLimit;
    xDiff = (resSlide.length - 1) * -120;
  } else {
    move = xDiff;
  }
  resPagination = Math.round(xDiff / 120);
  resPaginationCurrent = resPaginationPrev - resPagination;
  resPaginationColored[resPaginationCurrent].classList.add("fill");
  for (let i = 0; i < resSlide.length; i++) {
    resSlide[i].style = "transform: translate(" + move + "px);";
    if (resPaginationColored[i].classList.contains("fill")) {
      resPaginationColored[i].classList.remove("fill");
    }
    resPaginationColored[resPaginationCurrent].classList.add("fill");
  }
}
resPaginationPrev = resPaginationCurrent;
