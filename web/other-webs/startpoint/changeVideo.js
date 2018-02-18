function onClickEvent() {
  var title = document.getElementById("title");
  var video = document.getElementById("youtube");
  var playList = document.querySelectorAll(".playList li");

  playList.forEach(function(i) {
    i.addEventListener("click", function() {
      var text = i.textContent;
      var value = i.dataset.value;

      if(text) {
        title.innerHTML = text;
      }

      if(value) {
        video.src = value;
      }
    });
  });
}

onClickEvent();
