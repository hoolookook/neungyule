$(document).ready(function () {
  $(".single-item").slick({
    autoplay: true,
    dots: true,
    arrows: true,
  });
});
// $(function () {
//   var copyObj = $(".slick-dots").clone();
//   // $(".slick-dots").remove();
//   $(".sliderWrap").append(copyObj);
//   //slick의 dot를 옮겨서 body의 중앙으로 오게 만든다 요소들은 복사해서 추가시켜준다.
// });
$(".dropbtn").click(function () {
  if ($(".dropdown-content").css("display") == "none") {
    jQuery(".dropdown-content").css("display", "block");
    $(".familySite img").attr(
      "src",
      "/public/src/resources/images/neungyule/bg_family_close.png"
    );
  } else {
    jQuery(".dropdown-content").css("display", "none");
    $(".familySite img")
      .attr("src", "/public/src/resources/images/neungyule/bg_family.png")
      .css("min-width", "183");
  }
});
$(".slideBtn").click(function () {
  if ($(".hideBar").css("display") == "none") {
    $(".neInfo").css({
      "background-image":
        "url(/public/src/resources/images/neungyule/bg_ticker3.png)",
    });
    $(".hideBar").slideDown("fast");
  } else {
    $(".neInfo").css({
      "background-image":
        "url(/public/src/resources/images/neungyule/bg_ticker3_on.png)",
    });
    $(".hideBar").slideUp("fast");
  }
});
