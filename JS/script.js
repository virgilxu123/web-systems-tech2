window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo a").style.fontSize = "50px";
  } else {
    document.getElementById("logo a").style.fontSize = "60px";
  }
}