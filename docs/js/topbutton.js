document.addEventListener("DOMContentLoaded", function () {
  var pageTop = document.querySelector("#pageTop");
  pageTop.addEventListener("click", function () {
    const me = arguments.callee;
    const nowY = window.pageYOffset;
    window.scrollTo(0, nowY - 100);
    if (nowY > 0) {
      window.setTimeout(me, 10);
    }
  });
  window.addEventListener("scroll", function () {
    if (this.scrollY >= 200) {
      fadeIn(pageTop, 1);
    } else {
      fadeOut(pageTop, 1);
    }
  });
});

// fadeIn fadeutロジック
function fadeIn(element, time) {
  inOUtAnimation(element, time, 0, 100);
}

function fadeOut(element, time) {
  inOUtAnimation(element, time, 100, 0);
}

function inOUtAnimation(element, time, initial, end) {
  if (initial == 0) {
    increment = 2;
    element.style.display = "block";
  } else {
    increment = -2;
  }

  opc = initial;

  intervalo = setInterval(function () {
    if (opc == end) {
      if (end == 0) {
        element.style.display = "none";
      }
      clearInterval(intervalo);
    } else {
      opc += increment;
      element.style.opacity = opc / 100;
      element.style.filter = "alpha(opacity=" + opc + ")";
    }
  }, time * 10);
}
