//scroll_anime

$("#humberger").click(function () {
  if ($("#humberger").hasClass("hum_open")) {
    $("#humberger").removeClass("hum_open");
    $("#menu_open").css("transform", "translateX(120%)");
  } else {
    $("#humberger").addClass("hum_open");
    $("#menu_open").css("transform", "translateX(0%)");
  }
});

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
      $(".navbar").css("background-color", "rgba(255,255,255,0)");
    } else {
      $(".navbar").css("background-color", "rgba(255,255,255,0)");
    }
  });
}

$(window).scroll(function () {
  fadeAnime();
  if (window.matchMedia("(max-width: 991px)").matches) {
    $("#insta-feed").css({
      display: "grid",
      "grid-template-columns": "1fr 1fr 1fr",
      transform: "translateX(0%)",
      left: "0%",
    });
    $(".instafeed-container").css({
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%",
    });
    $(".instafeed-overlay").css({
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%",
    });
    // $('.instafeed-container').css({'width':'150px','padding-top':'150px','transform':'translateX(0%)','left':'0%'});
  }
});

$(window).on("load", function () {
  fadeAnime();
});

//////humbeger//////

//slide
$(".slider").slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 769, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2, //スライドを画面に2枚見せる
        slidesToScroll: 2, //1回のスクロールで2枚の写真を移動して見せる
      },
    },
    {
      breakpoint: 426, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1, //スライドを画面に1枚見せる
        slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
      },
    },
  ],
});

//product_img
$(function () {
  $(".simg ul li").click(function () {
    $(".bimg").children("img").attr("src", $(this).children("img").attr("src"));
  });
});

/////////FAQ////////////
$(".FAQ_block").click(function () {
  if ($(this).children(".answer").hasClass("show_answer")) {
    $(this).children(".answer").removeClass("show_answer");
    $(this).removeClass("cross");
  } else {
    $(this).addClass("cross");
    $(this).children(".answer").addClass("show_answer");
  }
});

$(".close_func").click(function () {
  $(".line_pop").css("display", "none");
  $(".back-overlay").css("display", "none");
});
