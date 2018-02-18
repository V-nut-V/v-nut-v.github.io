window.onload = change;

var i = 1;

function change() {
  var x = document.getElementById("slide");
  if (i < 5) {
    x.style.backgroundImage = "url(images/Slide" + i + ".jpg)";
    x.href = "about/relate"  + i + ".html";
    i = i + 1;
  } else {
    i = 1;
    x.style.backgroundImage = "url(images/Slide" + i + ".jpg)";
    x.href = "about/relate"  + i + ".html";
    i = i + 1;
  }

  setTimeout(change, 3000);
}

function popup() {
  alert("Sorry, this page is not avalible right now.");
}
