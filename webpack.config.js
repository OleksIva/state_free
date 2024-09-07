const path = require('path');

module.exports = {
  // Other Webpack configuration settings...
  resolve: {
    fallback: {
      "url": require.resolve("url/"),
      // You can add other fallbacks here if needed
    },
  },
  // Additional Webpack configuration settings...
};
