$(document).ready(function () {
  $(".single-item").slick({
    autoplay: true,
    dots: true,
  });
});
$(function () {
  var copyObj = $(".slick-dots").clone();
  $(".slick-dots").remove();
  $(".sliderWrap").append(copyObj);
  //slick의 dot를 옮겨서 body의 중앙으로 오게 만든다 요소들은 복사해서 추가시켜준다.
});
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

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
// $(".categoryWrap li").each(function () {
//   var nowImg = $(this).find("img");
//   var srcName = nowImg.attr("src");
//   var newSrc = srcName.substring(0, srcName.lastIndexOf("."));

//   $(this).hover(
//     function () {
//       $(this)
//         .find("img")
//         .attr("src", newSrc + "_on." + /[^.]+$/.exec(srcName));
//     },
//     function () {
//       $(this)
//         .find("img")
//         .attr("src", newSrc + "." + /[^.]+$/.exec(srcName));
//     }
//   );
// });
