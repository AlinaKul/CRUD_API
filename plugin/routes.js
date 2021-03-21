const getOpt = {
    schema: {
        responese:{
            200: {
                type: 'object',
                properties: {
                    _id: { type: 'number' },
                    model: { type: 'string' },
                    yearOfManufacturing: { type: 'number' },
                    lastMaintenanceDate: { type: 'string' },
                    isActive: { type: 'boolean' }
                    
                }
            }
        }
    }
}

const getOpts= {
    schema: {
        responese:{
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        model: { type: 'string' },
                        yearOfManufacturing: { type: 'number' },
                        lastMaintenanceDate: { type: 'string' },
                        isActive: { type: 'boolean' }
                    }
                }
            }
        }
    }
}

const putOpt = {
    schema: {}
        
}

const postOpt = {
    schema: {
        body: {
            type: 'object',
            properties: {
                yearOfManufacturing: { type: 'number' },
                lastMaintenanceDate: { type: 'string' },
                isActive: { type: 'boolean' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    _id: { type: 'number' },
                    model: { type: 'string'},
                    yearOfManufacturing: { type: 'number' },
                    lastMaintenanceDate: { type: 'string' },
                    isActive: { type: 'boolean' }
                }
            }
        }
    }
}



const deleteOpt = {
    schema: {}
}

function routes (fastify, options, done) {
   /* const trainCollection = fastify.trains.db.collection('trains')*/

    fastify.get('/', getOpt, async (request, reply) => {
        const trains = await trainCollection.find().toArray()
        return trains

    });

    fastify.get('/:id', getOpts, async (request, reply) => {
        
    });

    fastify.post('/', postOpt, async (request, reply) => {
        const train = request.body
        /* const result = await trainCollection.insert(trains)                    // fastify.trains.db.collection('todo') = todocollection kintamasis
        const insertedTrain = result.ops[0]
        return insertedTrain */
    });

    fastify.put('/', putOpt, async (request, reply) => {
        
    });

    fastify.delete('/:id', deleteOpt, async (request, reply) => {
        
    });
    
    
    
    
    

    done ();
    
}

module.exports = routes