// 0501-0520-醫材用品館 -母親盛典娘娘駕到
// https://shop.greattree.com.tw/campaign?id=115fe981-1251-4060-9806-4d93c27a3b0f

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
    `https://photo.greattree.com.tw/gre_special/campaign/day.min.js`
  )
);

$(".contentWrap").addClass("customWrap mother-ceremony");

// isBefore() : 判斷一個時間是否在另一個時間之前
// $('.day01').removeAttr("href");

function dayChange() {
  const today = dayjs();
  const notices = [
    { day: "2023-05-01", class: ".day01", text: "" },
    { day: "2023-05-02", class: ".day02", text: "下殺$2400" },
    { day: "2023-05-03", class: ".day03", text: "下殺$2624" },
    { day: "2023-05-04", class: ".day04", text: "下殺$1435" },
    { day: "2023-05-05", class: ".day05", text: "下殺$2014" },
    { day: "2023-05-06", class: ".day06", text: "下殺$936" },
    { day: "2023-05-07", class: ".day07", text: "下殺$2624" },
    { day: "2023-05-08", class: ".day08", text: "下殺$1824" },
    { day: "2023-05-09", class: ".day09", text: "下殺$3809" },
    { day: "2023-05-10", class: ".day10", text: "下殺$2580" },
    { day: "2023-05-11", class: ".day11", text: "下殺$712" },
    { day: "2023-05-12", class: ".day12", text: "下殺$6192" },
    { day: "2023-05-13", class: ".day13", text: "下殺$695" },
    { day: "2023-05-14", class: ".day14", text: "" },
    { day: "2023-05-15", class: ".day15", text: "下殺$833" },
    { day: "2023-05-16", class: ".day16", text: "下殺$16800" },
    { day: "2023-05-17", class: ".day17", text: "下殺$719" },
    { day: "2023-05-18", class: ".day18", text: "下殺$198" },
    { day: "2023-05-19", class: ".day19", text: "下殺$360" },
    { day: "2023-05-20", class: ".day20", text: "" },
    { day: "2023-05-21", class: ".day20", text: "" },
  ];

  //$(`${notices[i+1].class}`).attr("href","http://");

  for (let i = 0; i < notices.length; i++) {
    if (today.isBefore(notices[i + 1].day) !== true) {
      $(notices[i].class).css("-webkit-filter", `brightness(.5)`);
      $(notices[i].class).removeAttr("href");
      $(`${notices[i + 1].class} p`).text(notices[i + 1].text);
    }
  }
}

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
  //產品輪播
  const swiper1 = new Swiper(".limit-product", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    speed: 2200,
    coverflowEffect: {
      depth: 10, //深度偏移
      rotate: 45, //旋轉
      stretch: 10, //拉緊
      modifier: 1, //個數
      slideShadows: false, //陰影
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".limit-prev",
      prevEl: ".limit-next",
    },
  });
  dayChange();
});

windowSize();
