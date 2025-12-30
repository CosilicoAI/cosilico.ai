// Mock for vanilla-extract .css.ts files
// Returns a proxy that returns the property name as a string for any access
module.exports = new Proxy(
  {},
  {
    get: function (target, prop) {
      if (prop === '__esModule') return true;
      // Return the property name as the class name
      return prop;
    },
  }
);
