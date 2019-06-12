class Share {
  constructor(el) {
    this.shareButton = el;
    this.destinationUrl = el.dataset.url;
    this.quote = el.dataset.quote;

    this.applyListeners();
  }

  applyListeners() {
    this.shareButton.addEventListener('click', evt => this.openDialog(evt));
  }

  openDialog(evt) {
    evt.preventDefault();

    window.FB.ui({
      method: 'share',
      display: 'popup',
      href: this.destinationUrl,
      quote: this.quote,
    });
  }
}

export default {
  create(el) {
    const selector = el || '[data-share]';
    const elms = document.querySelectorAll(selector);
    const instances = [];

    Array.from(elms).forEach((elm) => {
      instances.push(new Share(elm));
    });
  },
};
