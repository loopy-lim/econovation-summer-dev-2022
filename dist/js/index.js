function buttonBind() {
  // Category Section
  $("#category-button").on("click", function () {
    if (location.href.match(/category/)) {
      $("#category-button").removeClass("is-active");
    } else {
      $("#category-button").addClass("is-active");
    }
  });

  $(".faq-q-box").each(function (index) {
    $(this).on("click", { index }, faq);
  });
}

function moveWord() {
  $(".move-word").hover(
    function () {
      $(this).find("img").attr("src", "dist/images/econovation_h.png");
    },
    function () {
      $(this).find("img").attr("src", "dist/images/econovation_n.png");
    }
  );
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

function faq(event) {
  let faqA = $(`#faq-a-${event.data.index}`);
  let degree = 0;
  faqA.slideToggle();
  if (faqA.hasClass(".open")) {
    faqA.removeClass(".open");
  } else {
    faqA.addClass(".open");
    degree = 90;
  }

  $(`#faq-q-${event.data.index} > svg`).animate(
    {
      borderSpacing: degree,
    },
    {
      step: function (now, fx) {
        $(this).css("-webkit-transform", "rotateZ(" + now + "deg)");
        $(this).css("-moz-transform", "rotateZ(" + now + "deg)");
        $(this).css("transform", "rotateZ(" + now + "deg)");
      },
    },
    "linear"
  );
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
    sectionsColor: [
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "transport",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
      "#fff",
    ],

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
    strings: [
      "SUM(<span style='margin-left: 20px;'></span>) <br> MORE <br> DEV!",
    ],
    typeSpeed: 50,
    showCursor: false,
    onComplete: () => {
      $(".overlay").fadeOut(700);
    },
  };
  new Typed(".overlay > div", typed_options);

  // swiper schedule
});
