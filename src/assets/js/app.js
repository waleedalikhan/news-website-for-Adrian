document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 767) {
    new Splide(".splide", {
      type: "loop",
      perPage: 1,
      focus: "center",
      cover: true,
      height: "200px",
      pagination: false,
      arrows: false,
    }).mount();
  } else {
    new Splide(".splide", {
      type: "loop",
      perPage: 3,
      focus: "center",
      cover: true,
      height: "200px",
      pagination: false,
      arrows: true,
    }).mount();
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 767) {
      new Splide(".splide", {
        type: "loop",
        perPage: 1,
        focus: "center",
        cover: true,
        height: "200px",
        pagination: false,
        arrows: false,
      }).mount();
    } else {
      new Splide(".splide", {
        type: "loop",
        perPage: 3,
        focus: "center",
        cover: true,
        height: "200px",
        pagination: false,
        arrows: true,
      }).mount();
    }
  });
});
