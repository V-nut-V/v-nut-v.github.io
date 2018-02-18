var $ = require("jquery");
//function for subpage to load large image when click the small image
function loadLargeImage() {
  const mobileImage = document.getElementById("mobileimg");
  const pcImage = document.getElementById("pcimg");
  const title = document.getElementById("title");
  const imageList = document.querySelectorAll(".box img");
  const imageFileName = document.getElementById("img-file").textContent;

  imageList.forEach(i => {
    i.addEventListener("click", function() {
      const value = i.dataset.value;

      if(mobileImage && value) {
        mobileImage.srcset = "../images/subpage/" + imageFileName + "/" + value + "-mobile.jpg";
        pcImage.src = "../images/subpage/" + imageFileName + "/" + value + "-pc.jpg";
        title.innerHTML = "";
      } else if(value) {
        pcImage.src = "../images/subpage/" + imageFileName + "/" + value + "-present.jpg";
        title.innerHTML = "";
      }
    });
  });
}

$(document).ready(function() {
//mobile menu open and close
  $(".burgerMenu").on("click", function() {
    $(this).toggleClass("X-sign");
    $(".phoneMenu").toggleClass("menuList");
  });

// show more info
  $(".button").on("click", function() {
    $(".introTage").addClass("intro");
  });

  $(".wc").on("click", function() {
    $(".weChatTage").addClass("weChat");
  });

  $(".box>img").on("click", function() {
    $(".detailTage").addClass("detail");
  });

// close info
  $(".closeTage").on("click", function() {
    $(".introTage").removeClass("intro");
    $(".weChatTage").removeClass("weChat");
    $(".detailTage").removeClass("detail");
  });

//info silde up and down
  $(".narrative").on("click", function() {
    $(".narrativeP").slideToggle(300);
  });

  $(".skills").on("click", function() {
    $(".skillsP").slideToggle(300);
  });

  $(".plan").on("click", function() {
    $(".planP").slideToggle(300);
  });

//subpage show images detail when click on it
  loadLargeImage();
});
