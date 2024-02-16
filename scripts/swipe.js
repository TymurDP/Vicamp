let items = document.querySelector(".testimonials__items");
let item = document.querySelectorAll(".testimonials__item");
let countMove = 0;
let rotation = 0;
gap = 24;
const widthItem = item[0].offsetWidth + gap;
let fillCircle = 0;
let circles = document.querySelectorAll(".testimonials__circle");

prevBtn = document.getElementById("prevBtn");
prevBtn.onclick = () => {
  if (rotation == 0) {
    return false;
  } else {
    rotation = "prev";
    firstRun = true;
    moveSlide(rotation);
  }
};

nextBtn = document.getElementById("nextBtn");
nextBtn.onclick = () => {
  rotation = "next";
  firstRun = true;
  moveSlide(rotation);
};

items.addEventListener("touchstart", handleTouchStartSwipe, false);
items.addEventListener("touchmove", handleTouchMoveSwipe, false);
items.addEventListener("touchend", swipeEnd);

function handleTouchStartSwipe(eventSwipe) {
  let firstTouchSwipe = eventSwipe.touches[0];
  x1Swipe = firstTouchSwipe.clientX;
}

function handleTouchMoveSwipe(eventSwipe) {
  if (!x1Swipe) {
    return false;
  }
  let x2Swipe = eventSwipe.touches[0].clientX;
  let xDiffSwipe = x2Swipe - x1Swipe;
  if (Math.abs(xDiffSwipe) > 50) {
    if (xDiffSwipe > 0) {
      rotation = "prev";
    } else {
      rotation = "next";
    }
    swipeEnd;
  }
}
function swipeEnd(eventSwipe) {
  moveSlide(rotation);
}

if (window.innerWidth > 1281) {
  adapt = 3;
} else if (window.innerWidth <= 1280) {
  adapt = 1;
} else if (window.innerWidth < 768) {
  adapt = 0;
}
const maxMove = -(item.length - adapt) * widthItem;

function moveSlide(rotation) {
  if (rotation == "prev" && countMove < 0) {
    countMove += widthItem;
  } else if (rotation == "next" && countMove > maxMove) {
    countMove -= widthItem;
  }
  for (let i = 0; i < item.length; i++) {
    item[i].style.transform = "translateX(" + countMove + "px)";
    item[i].style.transition = "1.5s";

    nextBtn.style = visible;
    countMove == maxMove
      ? (nextBtn.style = disable)
      : (nextBtn.style = visible);

    prevBtn.style = disable;
    countMove < 0 ? (prevBtn.style = visible) : (prevBtn.style = disable);
  }
  fillCircle = -countMove / widthItem;
  circles.forEach((element) => {
    element.classList.remove("filled");
  });
  circles[fillCircle].classList.add("filled");
}

let review = document.querySelectorAll("#closeReview");
let readSpan = document.querySelectorAll("#revSpan");
for (let i = 0; i < review.length; i++) {
  review[i].onclick = () => {
    if (readSpan[i].classList == "hidden") {
      readSpan[i].classList.remove("hidden");
      review[i].style.height = "auto";
    } else {
      readSpan[i].classList.add("hidden");
      review[i].style.height = "500px";
    }
  };
}
