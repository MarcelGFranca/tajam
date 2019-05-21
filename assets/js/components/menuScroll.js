window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80) {
    document.getElementById("menu").style.background = "#29234b";
    document.getElementById("menu").style.height = "80px";
  } else {
    document.getElementById("menu").style.background = "none";
    document.getElementById("menu").style.height = "90px";
  }
}
