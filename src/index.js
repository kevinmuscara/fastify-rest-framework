const createServer = require('fastify')

class Server {
  constructor(options = {}) {
    console.assert(options, `Options parameter required`);

    this.server = createServer()

    this.server.register(require('fastify-nextjs')).after(() => {
      options.routes.get.forEach(route => {
        this.server.next(route.url)
      })
    })
  }

  listen = (port, host = '0.0.0.0', plugins = {}) => {
    console.assert(port, `Port parameter required.`)

    if(!plugins) return
    else {
      plugins.forEach(plugin => this.server.register(plugin.plugin, plugin.options))
      this.server.listen(port, host, (err, add) => console.log(add))
    }
  }
}

module.exports = { Server }