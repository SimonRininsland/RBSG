// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

const routes = require('./routes')

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world mma' }
})

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect('mongodb://mongodb/rbsg')
 .then(() => console.log('MongoDB connected…'))
 .catch(err => console.log(err))

routes.forEach((route, index) => {
 fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0', (err, address) => {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    })
    fastify.log.info('server listening on ${fastify.server.address().port}')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

