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
  $("#moveWord>span").each(function () {
    let imgTag1 = document.createElement("img");
    imgTag1.src = "/dist/images/ECONOVATION_B.png";
    let imgTag2 = document.createElement("img");
    imgTag2.src = "/dist/images/bar_W.png";
    let imgTag3 = document.createElement("img");
    imgTag3.src = "/dist/images/SUMMERDEV_W.png";

    this.append(imgTag1);
    this.append(imgTag2);
    this.append(imgTag3);
  });
}

$(document).ready(() => {
  buttonBind();
  moveWord();

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
  typed = new Typed(".overlay > div", typed_options);
});
