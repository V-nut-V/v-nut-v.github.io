export function() {
  const pcImage = document.getElementById("pcimg");
  const title = document.getElementById("title");
  const imageList = document.querySelectorAll(".box img");
  const imageFileName = document.getElementById("img-file").textContent;

  imageList.forEach(i => {
    i.addEventListener("click", function() {
      const value = i.dataset.value;

      if(value) {
        pcImage.src = "../images/subpage/" + imageFileName + "/" + value + "-present.jpg";
        title.innerHTML = "";
      }
    });
  });
}

module.exports = loadLargeImage;
