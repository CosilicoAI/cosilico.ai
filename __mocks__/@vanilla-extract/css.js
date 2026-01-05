// Mock for @vanilla-extract/css
const createStyleProxy = () =>
  new Proxy(
    {},
    {
      get: (_, prop) => (typeof prop === 'string' ? prop : ''),
    }
  );

module.exports = {
  style: () => 'mock-style',
  styleVariants: () => ({}),
  globalStyle: () => {},
  createTheme: () => ['mock-theme-class', createStyleProxy()],
  createThemeContract: () => createStyleProxy(),
  createGlobalTheme: () => {},
  createGlobalThemeContract: () => createStyleProxy(),
  createVar: () => 'var(--mock)',
  fallbackVar: () => 'var(--mock)',
  assignVars: () => ({}),
  createContainer: () => 'mock-container',
  fontFace: () => 'mock-font',
  keyframes: () => 'mock-keyframes',
  globalFontFace: () => {},
  globalKeyframes: () => {},
  layer: () => 'mock-layer',
  globalLayer: () => {},
};
