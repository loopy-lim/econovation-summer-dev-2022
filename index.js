function buttonBind() {
  // Category Section
  $("#category-button").on("click", () => {
    if (isCategoryButtonActive) {
      $("#category-button").addClass("is-active");
    } else {
      $("#category-button").removeClass("is-active");
    }
    isCategoryButtonActive = !isCategoryButtonActive;
  });
}

function init() {
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
    sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#000"],

    autoScrolling: true,
    scrollHorizontally: true,
  });

  document.getElementsByClassName("fp-watermark")[0].remove();
  new Array(...document.getElementsByClassName("fp-arrow")).forEach(
    (fpArrow) => {
      fpArrow.remove();
    }
  );
  buttonBind();
}
let = isCategoryButtonActive = true;

init();
