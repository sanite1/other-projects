

document.querySelector(".button").addEventListener("click", function() {
  document.querySelector(".fa-power-off").classList.toggle("btn-active");
  for (var i = 0; i < document.querySelectorAll(".column").length; i++) {
    document.querySelectorAll(".column")[i].classList.toggle("column2");
  }
  for (var i = 0; i < document.querySelectorAll("h1").length; i++) {
    document.querySelectorAll("h1")[i].classList.toggle("dm-text");
  }
  for (var i = 0; i < document.querySelectorAll("h2").length; i++) {
    document.querySelectorAll("h2")[i].classList.toggle("dm-text");
  }
  for (var i = 0; i < document.querySelectorAll("h3").length; i++) {
    document.querySelectorAll("h3")[i].classList.toggle("dm-text");
  }

  document.querySelector(".theme").classList.toggle("dark-background");
});
