const mocker = require('http-mockjs').default
module.exports = {
  devServer: {
    before: app => {
      mocker(app)
    }
  }
}
