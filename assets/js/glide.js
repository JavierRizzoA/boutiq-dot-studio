var glide = new Glide('.glide-main', {
  type: 'carousel',
  perView: 3,
  focusAt: '0',
  peek: {
    before: 0,
    after: 200
  },
  gap: 50,
  breakpoints: {
    1600: {
      perView: 2
    },
    950: {
      perView: 1
    },
    768: {
      perView: 1,
      peek: {
        before: 0,
        after: 100
      }
    }
  }
});

glide.mount();

var glideClients = new Glide('.glide-clients', {
  type: 'carousel',
  perView: 2,
  focusAt: '0',
  peek: {
    before: 100,
    after: 100
  },
  gap: 50,
  breakpoints: {
    800: {
      perView: 1,
      peek: {
        before: 200,
        after: 200
      }
    },
    675: {
      perView: 1,
      peek: {
        before: 100,
        after: 100
      }
    },
    470: {
      perView: 1,
      peek: {
        before: 0,
        after: 100
      }
    },
    350: {
      perView: 1,
      peek: {
        before: 0,
        after: 100
      }
    }
  }
});

glideClients.mount();
