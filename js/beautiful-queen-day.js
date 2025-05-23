// 美容保養館-活動頁-2/21~3/15-I'm Queen 女王節
// https://shop.greattree.com.tw/campaign?id=389bace5-f5f6-4d72-8126-e7eb7bbc44d2

$("head").append(
  $("<script/>").attr(
    "src",
    `https://photo.greattree.com.tw/gre_special/campaign/imageMapResizer.min.js`
  )
);

$(".contentWrap").addClass("customWrap beautiful-queen-day");

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

$(".tab_content").hide();
$(".tab_content:first").show();

$(".tab_title li").click(function () {
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $(".tab_title li").removeClass("active");
  $(this).addClass("active");
});

$(window).resize(function () {
  windowSize();
  $("map").imageMapResize();
});

$(window).on("load", function () {
  windowSize();
  $("map").imageMapResize();
});

windowSize();
