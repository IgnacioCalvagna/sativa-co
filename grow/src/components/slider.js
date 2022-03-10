let thumbnails = document.getElementsByClassName("product-thumbnail");

console.log(`activeimages es`, thumbnails);

let activeImages = document.getElementsByClassName("active");

console.log(`activeimages es`, activeImages);

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active");
    }

    this.classList.add("active");
    document.getElementById("featured").src = this.src;
  });
}

let buttonRight = document.getElementById("slideRight");
let buttonLeft = document.getElementById("slideLeft");

// buttonLeft.addEventListener("click", function () {
//   document.getElementById("slider").scrollLeft -= 180;
// });

// buttonRight.addEventListener("click", function () {
//   document.getElementById("slider").scrollLeft += 180;
// });
