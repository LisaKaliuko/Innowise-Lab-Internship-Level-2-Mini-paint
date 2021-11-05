enum CommonColours {
  FirstTheme = '#4a4a4a', // main colour of app
  FirstThemeHover = '#7a7a7a', // all hover of app
  FirstThemeTitle = '#000000',
  SecondTheme = 'linear-gradient(90deg, Red, Orange, Yellow, Green, Blue, Indigo,violet)', // main colour of app
  SecondThemeHover = '#ff0000', // all hover of app
  SecondThemeTitle = 'linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)', // rainbow title
  SecondThemeBorders = '#bf3c04',
  Shadow = 'rgba(0,0,0,0.5)', // all shadows of app
  HeaderFooterText = '#ffffff', // text colour of header and footer
}

export const FirstTheme = {
  header: {
    bg: CommonColours.FirstTheme,
    text: CommonColours.HeaderFooterText,
    textHover: CommonColours.FirstThemeHover,
    radioBgColor: '#cccccc',
    toggleColor: '#ffffff',
    creativeRadioBgColor: '#52b4fa',
  },
  footer: {
    bg: CommonColours.FirstTheme,
    text: CommonColours.HeaderFooterText,
  },
  mainPage: {
    title: CommonColours.FirstThemeTitle,
  },
  primaryButton: {
    border: CommonColours.FirstTheme,
    text: '#000000',
    textHover: '#ffffff',
    bgHover: CommonColours.FirstThemeHover,
  },
  form: {
    shadow: CommonColours.Shadow,
    input: '#c7ccd0',
    button: CommonColours.FirstTheme,
    buttonText: '#ffffff',
    buttonHover: CommonColours.FirstThemeHover,
  },
  warning: {
    text: '#ff0000',
  },
  loader: {
    bgColor: '#ffffff',
    overlayColor: '#f3f3f3',
    spinColor: CommonColours.FirstTheme,
  },
  drawingPanel: {
    border: '#000000',
    iconBgHover: '#b0b0b0',
    selectedTool: CommonColours.FirstThemeHover,
    thicknessBg: '#ffffff',
  },
  buttonsPanel: {
    border: CommonColours.FirstTheme,
    bg: '#ffffff',
    bgHover: CommonColours.FirstThemeHover,
    textHover: '#ffffff',
  },
  gallery: {
    imgBorder: '#000000',
    selectBorder: CommonColours.FirstTheme,
    buttonBorder: CommonColours.FirstTheme,
    buttonBg: '#ffffff',
    buttonBgHover: CommonColours.FirstThemeHover,
    textHover: '#ffffff',
  },
};

export const SecondTheme = {
  header: {
    bg: CommonColours.SecondTheme,
    text: CommonColours.HeaderFooterText,
    textHover: CommonColours.SecondThemeHover,
    radioBgColor: '#cccccc',
    toggleColor: '#ffffff',
    creativeRadioBgColor: '#52b4fa',
  },
  footer: {
    bg: CommonColours.SecondTheme,
    text: CommonColours.HeaderFooterText,
  },
  mainPage: {
    title: CommonColours.SecondThemeTitle,
  },
  primaryButton: {
    border: CommonColours.SecondThemeBorders,
    text: '#000000',
    textHover: '#ffffff',
    bgHover: CommonColours.SecondThemeHover,
  },
  form: {
    shadow: CommonColours.Shadow,
    input: '#c7ccd0',
    button: CommonColours.SecondThemeBorders,
    buttonText: '#ffffff',
    buttonHover: CommonColours.SecondThemeHover,
  },
  warning: {
    text: '#ff0000',
  },
  loader: {
    bgColor: '#ffffff',
    overlayColor: '#f3f3f3',
    spinColor: CommonColours.SecondThemeBorders,
  },
  drawingPanel: {
    border: '#000000',
    iconBgHover: '#b0b0b0',
    selectedTool: CommonColours.SecondThemeHover,
    thicknessBg: '#ffffff',
  },
  buttonsPanel: {
    border: CommonColours.SecondTheme,
    bg: '#ffffff',
    bgHover: CommonColours.SecondThemeHover,
    textHover: '#ffffff',
  },
  gallery: {
    imgBorder: '#000000',
    selectBorder: CommonColours.SecondTheme,
    buttonBorder: CommonColours.SecondTheme,
    buttonBg: '#ffffff',
    buttonBgHover: CommonColours.SecondThemeHover,
    textHover: '#ffffff',
  },
};
