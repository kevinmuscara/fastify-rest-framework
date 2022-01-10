const { Server } = require('../')

new Server({
  routes: {
    get: [
      {
        url: '/'
      },
    ]
  }
}).listen(80, '0.0.0.0', [])