Page({
  data: {
    url: 'test.js'
  },
  onLoad() {
    const fnc = require('../../utils/' + this.data.url).fnc
    console.log(fnc)
  }
})