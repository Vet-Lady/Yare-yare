//PREMENNE//
var sec1 = $("#sec1");
var sec2 = $("#sec2");
var sec3 = $("#sec3");

var section1 = $(".section1");
var section2 = $(".section2");
var section3 = $(".section3");
var section4 = $(".section4");

var name = $("#name").val();
var age = $("#age").val();
var sex = $("input[name=sex]:checked").val();
var character = $("input[name=character]:checked").val();
var hair = $("input[name=hair-type]:checked").val();
var penis = $("#penis").val();
var boobs = $("#boobs").val();
var zoznamabilit = [];
var abilities = $("input[name=abilities]:checked");
var textarea = $("#bio").val();

$("#sec1").addClass("underline");
// ROTOVANIE NARUTOV-------------------------------------
var rotated = $(".menu img"),
  odkaz = $(".menu a");

odkaz.on("mouseenter", function () {
  $(this).siblings().css({ position: "relative" }).addClass("rotate");
});
odkaz.on("mouseleave", function () {
  $(this).siblings().removeClass("rotate");
});

// LIGHT BOX --------------------------------------------
var overlay = $("<div/>", { id: "overlay" });
overlay.appendTo("body").hide();

galeria = $(".sec1-container");

galeria.find("a").on("click", function (event) {
  event.preventDefault();
  var href = $(this).attr("href"),
    image = $("<img>", { src: href, alt: "anime obrazok" });

  overlay.html(image).show();
});

overlay.on("click", function () {
  var img = $("#overlay > img");
  img.animate({ height: 0, width: 0 }, 400);
  setTimeout(() => {
    overlay.hide();
  }, 300);
});

$(document).on("keyup", function (event) {
  if (event.which === 27) overlay.hide();
});

// PODCIARKNUTIE ODKAZU -------------
$(".menu a").on("click", function () {
  $(".menu a").removeClass("underline");
  $(this).addClass("underline");
});

//HRY --------------------
$("#games").hide();
var games = $("<a>", {
  href: "#games",
  class: "games",
  html: '<img src="./img/games.png"/>',
});

games
  .hide()
  .appendTo("body")
  .on("click", function () {
    $("#games").fadeIn(1000).siblings().hide();
    $("a").removeClass("underline");
  });

var win = $(window);
win.on("scroll", function () {
  if (win.scrollTop() >= 200) games.fadeIn();
  else games.hide();
});
//PREPINANIE ------------------------------
section2.hide();
section3.hide();

sec2.on("click", function (event) {
  event.preventDefault();
  section1.hide();
  section3.hide();
  section4.hide();
  section2.fadeIn(1000);
  $("body").css("backgroundSize","cover")
});
sec3.on("click", function (event) {
  event.preventDefault();
  section1.hide();
  section2.hide();
  section4.hide();
  section3.fadeIn(1000);
  $("body").css("backgroundSize","cover")
});
sec1.on("click", function (event) {
  event.preventDefault();
  section2.hide();
  section3.hide();
  section4.hide();
  section1.fadeIn(1000);
  $("body").css("backgroundSize","cover")
});
/* window.location.reload(); */


//na sekcii 3 pise ze musis najprv formular






//FORMULAR   ----------------------------------------

$("input[type=radio][name=sex]").change(function () {
  if (this.value === "male") {
    section2.children().find(".sec2-container").addClass("mal").removeClass("fem");
    $(".boobs").hide();
    $(".penis").show();
  } else if (this.value === "female") {
    section2.children().find(".sec2-container").addClass("fem").removeClass("mal");
    $(".penis").hide();
    $(".boobs").show();
  }
});

$(".btn-grad").click(function (event) {
  event.preventDefault();
  section1.hide();
  section2.hide();
  $(".not-filled").hide();
  section3.fadeIn(1000);
  sec2.removeClass("underline");
  sec3.addClass("underline");

  name = $("#name").val();
  age = $("#age").val();
  sex = $("input[name=sex]:checked").val();
  character = $("input[name=character]:checked").val();
  hair = $("input[name=hair-type]:checked").val();
  penis = $("#penis").val();
  boobs = $("#boobs").val();
  zoznamabilit = [];
  abilities = $("input[name=abilities]:checked");
  textarea = $("#bio").val();
  postava = {};

  abilities.each(function () {
    zoznamabilit.push($(this).val());
  });
  postava.sex = sex;
  postava.character = character;
  postava.hair = hair;

  console.log(postava);
  $("span").html(name);

  switch (true) {
    case postava.sex === "male" &&
      postava.character === "happy" &&
      postava.hair === "brunette":
      $(".happy-brun-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "male" &&
      postava.character === "happy" &&
      postava.hair === "blonde":
      $(".happy-blond-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "male" &&
      postava.character === "dark" &&
      postava.hair === "brunette":
      $(".dark-brun-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "male" &&
      postava.character === "dark" &&
      postava.hair === "blonde":
      $(".dark-blond-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "male" &&
      postava.character === "sly" &&
      postava.hair === "brunette":
      $(".sly-brun-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "male" &&
      postava.character === "sly" &&
      postava.hair === "blonde":
      $(".sly-blond-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "male" &&
      postava.character === "shy" &&
      postava.hair === "brunette":
      $(".shy-brun-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "male" &&
      postava.character === "shy" &&
      postava.hair === "blonde":
      $(".shy-blond-male").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "happy" &&
      postava.hair === "brunette":
      $(".happy-brun-female").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "happy" &&
      postava.hair === "blonde":
      $(".happy-blond-female").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "dark" &&
      postava.hair === "brunette":
      $(".dark-brun-female").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "dark" &&
      postava.hair === "blonde":
      $(".dark-blond-female").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "sly" &&
      postava.hair === "brunette":
      $(".sly-brun-female").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "sly" &&
      postava.hair === "blonde":
      $(".sly-blond-female").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "shy" &&
      postava.hair === "brunette":
      $(".shy-brun-female").css("display", "flex").siblings().hide();
      break;

    case postava.sex === "female" &&
      postava.character === "shy" &&
      postava.hair === "blonde":
      $(".shy-blond-female").css("display", "flex").siblings().hide();
      break;
  }
  $("#formular")[0].reset();
});

function reset() {
  name = $("#name").val();
  age = $("#age").val();
  sex = $("input[name=sex]:checked").val();
  character = $("input[name=character]:checked").val();
  hair = $("input[name=hair-type]:checked").val();
  penis = $("#penis").val();
  boobs = $("#boobs").val();
  zoznamabilit = [];
  abilities = $("input[name=abilities]:checked");
  textarea = $("#bio").val();
}
