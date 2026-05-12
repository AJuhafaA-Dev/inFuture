function cardclicked() {
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("plasticBottle-screen").style.display = "block";
  window.scrollTo(0, 0);
}
function cardclicked2() {
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("plasticBag-screen").style.display = "block";
  window.scrollTo(0, 0);
}
function cardclicked3() {
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("glass-bottle-screen").style.display = "block";
  window.scrollTo(0, 0);
}
function goHome() {
  const screens = document.querySelectorAll(".item-screen");
  screens.forEach((screen) => {
    screen.style.display = "none";
  });

  document.getElementById("selection-screen").style.display = "block";

  window.scrollTo(0, 0);
}
