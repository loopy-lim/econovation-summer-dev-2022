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

  // TODO: 링크를 넣어주세요
  $("#kakaotalk-notice").on("click", function () {
    goLink("https://pf.kakao.com/_laTLs");
  });
  $("#medium-notice").on("click", function () {
    goLink("https://medium.com/econovation");
  });
  $("#instagram-notice").on("click", function () {
    goLink("https://www.instagram.com/cnu_econovation/");
  });
  $("#homepage-notice").on("click", function () {
    goLink("https://econovation.kr/about");
  });
  $("#go-everytime").on("click", function () {
    goLink("");
  });
  $("#go-instagram").on("click", function () {
    goLink("");
  });
  $("#preorder").on("click", function () {
    goLink(
      "https://docs.google.com/forms/d/e/1FAIpQLSfJoYv7umKo5Sq5KrEBkxtXtOOy9p6A0qB9YR4HooCrnD8XmQ/viewform"
    );
  });
  $("#linkcopy").on("click", function () {
    let currentUrl = window.document.location.origin;

    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = currentUrl;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);

    alert("다른 곳에 홍보해 보세요!");
  });
  $("#category-timetable").on("click", function () {
    location.href = location.pathname + "#timetable";
  });
  $("#category-project").on("click", function () {
    location.href = location.pathname + "#project";
  });
  $("#category-faq").on("click", function () {
    location.href = location.pathname + "#faq";
  });
  $("#category-event").on("click", function () {
    location.href = location.pathname + "#event";
  });
  $("#category-notice").on("click", function () {
    location.href = location.pathname + "#notice";
  });
}

function goLink(link) {
  window.open(link, "_blank");
}

function introAttache() {
  const data = introData["data"];

  // menu 생성
  data.forEach((d) => {
    const projectBox = document.createElement("div");
    projectBox.className = "project-section-box";
    const projectTitle = document.createElement("div");
    projectTitle.className = "project-section-title argentum";
    projectTitle.id = d.type;
    projectTitle.innerHTML = d.type;
    projectTitle.addEventListener("click", function () {
      let selectedTeam = this.getAttribute("data-team") || d.teams[0].teamName;
      projectTeamButtonClick(selectedTeam);
    });
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
  $(`#${teamType[teamName]}`).attr("data-team", teamName);

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

  if ($("#project-intro-box").css("display") == "none") {
    changeProjectData(teamName);
    $(".project-intro-img").animate({ width: 600 }, 500);
    $("#project-intro-box").css("display", "");
    $("#project-intro-box").addClass("fadeInRight");
  } else if ($("#project-intro-subbox").css("display") == "none") {
    $(".project-intro-img").animate({ width: 600 }, 500);
    $("#project-intro-subbox").addClass("fadeOutRight");
    $("#project-intro-box").addClass("fadeOutRight");
    setTimeout(() => {
      changeProjectData(teamName);
      $("#project-intro-box").removeClass("fadeOutRight");
      $("#project-intro-box").css("display", "");
      $("#project-intro-box").addClass("fadeInRight");
    }, 500);
  } else {
    $(".project-intro-img").animate({ width: 600 }, 500);
    $("#project-intro-subbox").addClass("fadeOutRight");
    $("#project-intro-box").addClass("fadeOutRight");
    setTimeout(() => {
      changeProjectData(teamName);
      $("#project-intro-box").css("display", "none");
      $("#project-intro-subbox").css("display", "none");
      $("#project-intro-box").removeClass("fadeOutRight");
      setTimeout(() => {
        $("#project-intro-box").css("display", "");
        $("#project-intro-subbox").addClass("fadeInRight");
      }, 500);
    }, 500);
    $("#project-intro-subbox").removeClass("fadeInRight");
    $(".project-intro-inner-button").html("자세히보기");
  }
}

function changeProjectData(teamName) {
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
}

function projectDetailButtonClick() {
  if ($("#project-intro-subbox").css("display") == "none") {
    $(".project-intro-img").animate({ width: 190 }, 500);
    $("#project-intro-subbox").css("display", "");
    $("#project-intro-subbox").addClass("fadeInRight");
    $("#project-intro-subbox").removeClass("fadeOutRight");
    $(".project-intro-inner-button").html("돌아가기");
  } else {
    $(".project-intro-img").animate({ width: 600 }, 500);
    $("#project-intro-subbox").addClass("fadeOutRight");
    setTimeout(() => {
      $("#project-intro-subbox").css("display", "none");
    }, 700);
    $("#project-intro-subbox").removeClass("fadeInRight");
    $(".project-intro-inner-button").html("자세히보기");
  }
}
let curDataIndex = 1;
const timetableData = timetable["data"];
let autoI = -1;

function timetableAttach() {
  timetableData.forEach((t, i) => {
    let $circle = $(`<div class="timetable-circle"></div>`);
    let $title = $(`<div class="timetable-circle-title">${t.type}</div>`);
    let $box = $(`<div class="timetable-circle-box"></div>`);

    $box.attr("data-timetable", i);
    $box.append($title);
    $box.append($circle);
    $(".timetable-line").append($box);
  });

  $(".timetable-circle-box").on("click", function () {
    let i = $(this).attr("data-timetable");
    addTimetableData(timetableData[i], i);
    curDataIndex = parseInt(i);
  });

  addTimetableData(timetableData[0], 0);
  autoTimetable();
}

function autoTimetable() {
  let timetableL = timetableData.length;

  autoI = setInterval(() => {
    if (timetableL == curDataIndex) {
      curDataIndex = 0;
    }
    addTimetableData(timetableData[curDataIndex], curDataIndex);
    curDataIndex += 1;
  }, 2000);
}

function addTimetableData(data, index) {
  $(".timetable-title").html(data.type);
  $(".timetable-time").html(data.time);
  $(".timetable-teams")[0].innerHTML = "";

  $(".timetable-circle").each(function (i) {
    if (i == index) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".timetable-circle-title").each(function (i) {
    if (i <= index) {
      $(this).addClass("selected");
    } else {
      $(this).removeClass("selected");
    }
  });

  data.teams.split(", ").forEach((team) => {
    let teamDiv = document.createElement("div");
    teamDiv.classList.add("timetable-team");
    teamDiv.innerHTML = team;

    $(".timetable-teams")[0].appendChild(teamDiv);
  });
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
  "dist/images/econovation_h.png",
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
  timetableAttach();
  preload(images);

  let href = location.href;
  if (href[href.length - 1] == "/") {
    location.href = href + "#mainSection";
  }

  new fullpage("#fullpage", {
    licenseKey: "gplv3-license",
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
      $(".reveal").each(function () {
        $(this).removeClass("active");
      });
    },
  };
  new Typed(".overlay > div", typed_options);
});

let observer = new MutationObserver((mutations) => {
  // 노드가 변경 됐을 때의 작업
  if (isScrolledIntoView($("#sentence-block")[0])) {
    $(".reveal").each(function () {
      $(this).removeClass("active");
    });
  } else {
    $(".reveal").each(function () {
      $(this).addClass("active");
    });
  }
});

// 감시자의 설정
let option = {
  attributes: true,
};

observer.observe(document.querySelector("#fullpage"), option);

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
