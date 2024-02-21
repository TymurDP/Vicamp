let widthDevice = window.innerWidth;

if (widthDevice < 641) {
  let resSlide = document.querySelectorAll(".residential__item");
  let item = document.getElementById("items");
  let x1 = 0;
  let maxMoveRes = 0;
  let moveCalc = 140;
  let countMoveRes = 0;
  let quantity =
    ((resSlide.length + 1) * moveCalc - widthDevice * 0.9) / moveCalc;
  quantity = Math.ceil(quantity);

  let resPaginationCurrent = 0;
  let resPaginationColored = document.querySelectorAll(".circle");
  resPaginationColored[resPaginationCurrent].classList.add("fill");

  if (widthDevice > 500) {
    resPaginationColored[5].style.display = "none";
    quantity -= 1;
  }

  item.addEventListener("touchstart", handleTouchStart, false);
  item.addEventListener("touchmove", handleTouchMove, false);
  item.addEventListener("touchend", handleTouchEnd);

  function handleTouchStart(event) {
    let firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
  }

  function handleTouchMove(event) {
    if (!x1) {
      return false;
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

  maxMoveRes = quantity * moveCalc;
  resPaginationColored[resPaginationCurrent].classList.add("fill");

  function moveResidential(direction) {
    if (direction == "left" && countMoveRes > -maxMoveRes) {
      countMoveRes -= moveCalc;
    } else if (direction == "right" && countMoveRes < 0) {
      countMoveRes += moveCalc;
    }

    resSlide.forEach((element) => {
      element.style.transform = "translateX(" + countMoveRes + "px)";
    });

    resPaginationCurrent = -countMoveRes / moveCalc;
    resPaginationColored.forEach((element) => {
      element.classList.remove("fill");
    });
    resPaginationColored[resPaginationCurrent].classList.add("fill");
  }
} else false;
