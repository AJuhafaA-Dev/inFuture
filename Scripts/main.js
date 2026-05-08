function cardclicked(years, itemName) {
  document.getElementById("selection-screen").style.display = "none";
  document.getElementById("plasticBottle-screen").style.display = "none";
  let futureYear = 2026 + years;
  document.getElementById("main-text").innerText = `CURRENT YEAR ${futureYear}`;
}
