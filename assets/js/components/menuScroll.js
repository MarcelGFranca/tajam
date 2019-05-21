window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10) {
    // document.getElementById("menu").style.paddingTop = "10px";
    menu.className="s-header s-header--darken";
  } else {
    menu.className="s-header";
    // document.getElementById("menu").style.paddingTop = "20px";
  }
}
