// Put your application javascript here
window.onload = function () {
  var elemPos_v;
  var scroll_v;
  var windowHeight_v;
  var sprime_triger = 0;
  var obake_triger = 0;

  function fadeAnime() {
    // ふわっ
    $(".fadeUpTrigger").each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("fadeUp");
      } else {
        $(this).removeClass("fadeUp");
      }
    });

    $("body").each(function () {
      var elemPos = $(this).offset().top + 1000;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(".navbar").css("background-color", "rgba(255,255,255,0.7)");
      } else {
        $(".navbar").css("background-color", "rgba(255,255,255,0)");
      }
    });
  }

  $(window).on("scroll", function () {
    fadeAnime();
  });

  $(window).on("load", function () {
    fadeAnime();
  });
};
