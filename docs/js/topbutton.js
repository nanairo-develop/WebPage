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
  //window.addEventListener("scroll", function () {
  //  if (this.scrollTop() >= 200) {
  //    pageTop.fadeIn();
  //  } else {
  //    pageTop.fadeOut();
  //  }
  //});
});
