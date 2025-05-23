// Angel LaLa天使娜拉x昂萃Puriginal Life聯合品牌月
// https://shop.greattree.com.tw/campaign?id=cde2816d-cc3b-42c7-ae56-928b12786866

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
  ),
  $("<script/>").attr(
    "src",
    `https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.min.js`
  )
);

$(".contentWrap").addClass("customWrap angel_puriginal");

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
windowSize();

window.onload = function () {
  $("map").imageMapResize();
  //產品輪播
  const swiper1 = new Swiper(".limit-product", {
    slidesPerView: 1,
    loop: true,
    speed: 2200,
    autoplay: {
      delay: 3000,
    },
  });
  //banner輪播
  const swiper2 = new Swiper(".wrap_banner", {
    slidesPerView: 1,
    loop: true,
    speed: 2200,
    autoplay: {
      delay: 3000,
    },
  });
  //全品下殺
  const swiper3 = new Swiper(".animation_group", {
    slidesPerView: 1,
    loop: true,
    speed: 4000,
    autoplay: {
      delay: 4000,
    },
  });
  //滾動動畫
  window.sr = ScrollReveal({
    duration: 1000, // 動畫時間
    mobile: true, // 支援行動裝置
    reset: false, // 每次都啟動動畫
    useDelay: "always", // 延遲動畫次數
    viewFactor: 0.35, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
    easing: "ease-in-out",
  });
  sr.reveal(".leftAnimate", {
    origin: "left",
    distance: "100px",
  });
  sr.reveal(".rightAnimate", {
    origin: "right",
    distance: "100px",
  });
};

//浮動選單
var lastScrollY = 0;
window.addEventListener("scroll", function () {
  var st = this.scrollY;
  var pc_st = 270 - st;
  if (pc_st >= 0) {
    $(".float_menuEX").removeClass("active");
  } else {
    $(".float_menuEX").addClass("active");
  }
  lastScrollY = st;
});

var $clickTag = $('area[href^="#"]');
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

//燈箱
$(".model , .light-box-footer , .close-button").click(function () {
  $("body").toggleClass("light-box-on");
  $(".fix-bg").toggleClass("dis-on");
});
