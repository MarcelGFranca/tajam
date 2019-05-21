window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10) {
    document.getElementById("menu").style.background = "#29234b";
    document.getElementById("menu").style.height = "80px";
    menu.className="s-header--darken s-header";
  } else {
    document.getElementById("menu").style.background = "none";
    document.getElementById("menu").style.height = "90px";
    menu.className="s-header s-header--undarken";
  }
}
