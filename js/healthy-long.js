// 健康長長久久慶
// https://shop.greattree.com.tw/campaign?id=e82cc591-6dc1-4e29-9a67-a652c74fcf11

$("head").append(
  $("<script/>").attr(
    "src",
    `https://photo.greattree.com.tw/gre_special/campaign/imageMapResizer.min.js`
  ),
  $('<link rel="stylesheet"/>').attr(
    "href",
    `https://photo.greattree.com.tw/gre_special/campaign/swiper-bundle.min.css`
  ),
  $("<script/>").attr(
    "src",
    `https://photo.greattree.com.tw/gre_special/campaign/swiper.js`
  )
  // $('<script/>').attr('src',`https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.min.js`)
);

$(".contentWrap").addClass("customWrap healthy_long_2023");

function anchorPoint(dom) {
  $(dom).each(function (key, value) {
    var $this = $(this);
    $this.attr("id", "AA" + key);
    console.log(value);
  });
}
anchorPoint(".themePd3_wrap");

var $clickTag = $('a[href^="#"]');
$clickTag.click(function () {
  var target = $(this.getAttribute("href"));
  if ($(window).width() < 768) {
    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 50,
          },
          300
        );
    }
    return false;
  } else {
    if (target.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 100,
          },
          300
        );
    }
    return false;
  }
});

window.addEventListener("scroll", function () {
  var st = this.scrollY;
  var pic_st = st / 100;
  console.log(st);
  $(".bgPic").css("background-position", `0px -${pic_st}vw`);
});

function windowSize() {
  if ($(window).width() < 1199) {
    let heightContent = $(".contentWrap").height();
    let heightWrap = parseInt(heightContent) + parseInt(90) + "px";
    $(".footer_bottom").css("top", heightWrap);
  }
}

$(window).resize(function () {
  windowSize();
  $("map").imageMapResize();
});

$(window).on("load", function () {
  windowSize();
  $("map").imageMapResize();
  const swiper1 = new Swiper(".pd_normal_one", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    speed: 2200,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".pd_prev",
      prevEl: ".pd_next",
    },
    pagination: {
      el: ".pd_pagination",
      clickable: true, // 點擊
    },
  });
});

setTimeOut(() => {
  windowSize();
}, 1000);
