module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./app/globals.css', './app/globals.module.css'], 
    },
    'postcss-custom-media': {},
  },
};