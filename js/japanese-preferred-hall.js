// 日系優選館常駐_秋楓版
// https://shop.greattree.com.tw/campaign?id=3699df49-308d-4091-9b04-e33cae4b7a24

$("head").append(
  $("<script/>").attr(
    "src",
    `https://photo.greattree.com.tw/gre_special/campaign/imageMapResizer.min.js`
  )
);

$(".contentWrap").addClass("customWrap japanese-preferred");

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
});

windowSize();
