window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10) {
    menu.className="s-header s-header--darken";
  } else {
    menu.className="s-header";
  }
}
