// JavaScript Document
/*Menu Button Animation*/
const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.getElementsByClassName('.menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})

function readmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("morebtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}