var elem = document.querySelector ('.main-carousel');
var flkty = new Flickity (elem, {
  //options
  cellAlign: 'left',
  draggable: true,
  contain: true,
  pageDots: true
});

// element argument can be a selector string
// for an individual element
var flkty = new Flickity ('.main-carousel', {
  //option
});
