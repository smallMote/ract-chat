module.exports = {
  plugins: {
    autoprefixer: {
      // overrideBrowserslist: ['Android >= 4.0', 'iOS >= 8']
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    'postcss-pxtorem': {
      rootValue: 75, // 1rem = 75px 基于750设计稿
      propList: ['*']
    }
  }
}
