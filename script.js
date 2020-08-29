function ZepFunction()  {
    document.getElementById("burger_menu").classList.toggle("appear");
  }
  const hamburger = document.getElementById("burger_icon");
  hamburger.addEventListener("click", function() {
   ZepFunction();
  })

  function xFunction()  {
    document.getElementById("burger_menu").classList.remove("appear");
  }
  const xburger = document.getElementById("xclose");
  xburger.addEventListener("click", function() {
   xFunction();
  })

