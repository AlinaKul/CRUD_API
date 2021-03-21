const fastify = require('fastify')({ logger: true });

/*fastify.register(require('./db/sqlite3'))*/
require('./db/sqlite3')
fastify.register(require('./plugin/routes'), { prefix: '/trains'})

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (error) {
        console.log(error)
        fastify.log.error(error)
    }
}

start ();

/* fastify.listen(3000, function (err, address) {      // old scool
    if (err) {
        fastify.log.error(err)
        fastify.exit(1)
    }
}); */
