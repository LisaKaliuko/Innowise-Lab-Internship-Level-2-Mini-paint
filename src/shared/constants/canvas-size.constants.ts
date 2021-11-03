const WIDTH_SIZES = {
  mobileS: 285,
  mobileM: 335,
  mobileL: 380,
  tablet: 550,
  laptop: 720,
  laptopL: 950,
};

const screenWidth = document.documentElement.clientWidth;
let canvasWidth = WIDTH_SIZES.mobileS;

switch (true) {
  case screenWidth < 375: {
    canvasWidth = WIDTH_SIZES.mobileS;
    break;
  }
  case screenWidth >= 375 && screenWidth < 425: {
    canvasWidth = WIDTH_SIZES.mobileM;
    break;
  }
  case screenWidth >= 425 && screenWidth < 768: {
    canvasWidth = WIDTH_SIZES.mobileL;
    break;
  }
  case screenWidth >= 768 && screenWidth < 1024: {
    canvasWidth = WIDTH_SIZES.tablet;
    break;
  }
  case screenWidth >= 1024 && screenWidth < 1440: {
    canvasWidth = WIDTH_SIZES.laptop;
    break;
  }
  case screenWidth >= 1440: {
    canvasWidth = WIDTH_SIZES.laptopL;
    break;
  }
  default:
    canvasWidth = WIDTH_SIZES.tablet;
}

export const CanvasSize = {
  width: canvasWidth,
  height: canvasWidth / 1.9,
};
