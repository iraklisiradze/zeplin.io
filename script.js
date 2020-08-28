function ZepFunction()  {
    document.getElementById("burger_menu").classList.toggle("appear");
  }
  const hamburger = document.getElementById("burger_icon");
  hamburger.addEventListener("click", function() {
   ZepFunction();
  })