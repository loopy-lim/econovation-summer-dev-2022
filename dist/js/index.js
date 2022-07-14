function buttonBind() {
  // Category Section
  $("#category-button").on("click", () => {
    if (location.href.match(/category/)) {
      $("#category-button").removeClass("is-active");
    } else {
      $("#category-button").addClass("is-active");
    }
  });
}

function moveWord() {
  // $('#moveWord')
}

function swiperSchedule() {
  new Swiper(".e-swiper", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    loopAdditionalSlides: 30,
    slidesPerView: 5,
    direction: "vertical",
  });
}

$(document).ready(function () {
  buttonBind();
  moveWord();
  swiperSchedule();

  new fullpage("#fullpage", {
    licenseKey: "",
    anchors: [
      "firstPage",
      "secondPage",
      "thirdPage",
      "fourthPage",
      "fifthPage",
      "sixthPage",
    ],
    //sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#000"],

    autoScrolling: true,
    scrollHorizontally: true,
  });

  // category button
  if (location.href.match(/category/)) {
    location.href = "/index.html#mainSection";
  }

  document.getElementsByClassName("fp-watermark")[0].remove();
  new Array(...document.getElementsByClassName("fp-arrow")).forEach(
    (fpArrow) => {
      fpArrow.remove();
    }
  );

  // loading
  const typed_options = {
    strings: ["SUM() <br> MORE <br> DEV!"],
    typeSpeed: 50,
    showCursor: false,
    onComplete: () => {
      $(".overlay").fadeOut(700);
    },
  };
  new Typed(".overlay > div", typed_options);

  // swiper schedule
});
