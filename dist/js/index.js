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

  $(".project-intro-inner-button").on("click", projectDetailButtonClick);

  $("#kakaotalk-notice").on("Click", function () {});
  $("#medium-notice").on("Click", function () {});
  $("#instagram-notice").on("Click", function () {});
  $("#homepage-notice").on("Click", function () {});
}

function introAttache() {
  const data = introData["data"];

  // menu 생성
  data.forEach((d) => {
    const projectBox = document.createElement("div");
    projectBox.className = "project-section-box";
    const projectTitle = document.createElement("div");
    projectTitle.className = "project-section-title";
    projectTitle.id = d.type;
    projectTitle.innerHTML = d.type;
    projectBox.appendChild(projectTitle);
    const projectTeamBox = document.createElement("div");
    projectTeamBox.className = "project-section-team-box";

    d.teams.forEach((team) => {
      const projectTeamButton = document.createElement("button");
      projectTeamButton.className = "project-section-team-button";
      projectTeamButton.setAttribute("data-team", team.teamName);
      projectTeamButton.addEventListener("click", () =>
        projectTeamButtonClick(team.teamName)
      );
      projectTeamButton.innerHTML = team.teamName;
      projectTeamBox.appendChild(projectTeamButton);
    });
    projectBox.appendChild(projectTeamBox);
    $("#project-menu-box").append(projectBox);
  });
}

function projectTeamButtonClick(teamName) {
  $(".project-section-title").css("color", "#D7D7D7D7");
  $(".project-section-title").animate({ fontSize: 58 });
  $(".project-section-team-button").animate({ fontSize: 21 });
  $(".project-section-team-box").animate({ width: 300 });
  $("#project-menu-box").animate({ width: 250 });
  $(".project-section-team-box button").css("color", "#D7D7D7D7");
  $(".project-section-team-box")
    .find(`[data-team='${teamName}']`)
    .css("color", "black");
  $(`#${teamType[teamName]}`).css("color", "black");

  const teams = introData["data"].filter(
    (d) => d.type == [teamType[teamName]]
  )[0];

  const selectTeam = teams.teams.filter((t) => t.teamName == teamName)[0];
  $(".project-intro-img").attr("src", selectTeam.img);
  $(".project-intro-inner-section").html(teamType[teamName]);
  $(".project-intro-inner-title").html(selectTeam.title);
  $(".project-intro-inner-team-title").html(
    `<div style='margin: -0px -3px -35px -3px;height: 15px; opacity: ${selectTeam.opacity}; background-color: ${selectTeam.color};z-index: -1;position: relative;'></div>` +
      teamName
  );
  $(".project-intro-inner-team-people").html(selectTeam.people);
  $(".project-intro-inner-subtitle").html(selectTeam.subTitle);
  $(".project-intro-idea").html(selectTeam.idea);
  $(".project-intro-tech").html(selectTeam.tech);

  $(".project-intro-img").animate({ width: 600 }, 500);
  $("#project-intro-box").css("display", "");
  $("#project-intro-subbox").addClass("fadeOutRight");
  setTimeout(() => {
    $("#project-intro-subbox").css("display", "none");
  }, 700);
}

function projectDetailButtonClick() {
  if ($("#project-intro-subbox").css("display") == "none") {
    $(".project-intro-img").animate({ width: 190 }, 500);
    $("#project-intro-subbox").css("display", "");
    $("#project-intro-subbox").addClass("fadeInRight");
    $("#project-intro-subbox").removeClass("fadeOutRight");
  } else {
    $(".project-intro-img").animate({ width: 600 }, 500);
    $("#project-intro-subbox").addClass("fadeOutRight");
    setTimeout(() => {
      $("#project-intro-subbox").css("display", "none");
    }, 700);
    $("#project-intro-subbox").removeClass("fadeInRight");
  }
}

const images = [
  "dist/images/별을찾아서.png",
  "dist/images/손말잇기.png",
  "dist/images/친해지길바라.png",
  "dist/images/econoBeep.png",
  "dist/images/hackyourday.png",
  "dist/images/HairLog.png",
  "dist/images/healper.png",
  "dist/images/juggle.png",
  "dist/images/t-econo.png",
  "dist/images/econovation_h",
];

function preload(images) {
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
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
  introAttache();

  let href = location.href;
  if (href[href.length - 1] == "/") {
    location.href = href + "#mainSection";
  }

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
      "SUM(<span style='margin-left: 80px;'></span>) <br> MORE <br> DEV!",
    ],
    typeSpeed: 50,
    showCursor: false,
    onComplete: () => {
      $(".overlay").fadeOut(700);
    },
  };
  new Typed(".overlay > div", typed_options);

  preload(images);
  // swiper schedule
});
