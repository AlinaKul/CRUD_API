const getOpt = {
    schema: {
        responese:{
            200: {
                type: 'object',
                properties: {
                    _id: { type: 'integer' },
                    model: { type: 'string' },
                    yearOfManufacturing: { type: 'integer' },
                    lastMaintenanceDate: { type: 'integer' },
                    isActive: { type: 'integer' }
                    
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
                        id: { type: 'integer' },
                        model: { type: 'string' },
                        yearOfManufacturing: { type: 'integer' },
                        lastMaintenanceDate: { type: 'integer' },
                        isActive: { type: 'integer' }
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
                yearOfManufacturing: { type: 'integer' },
                lastMaintenanceDate: { type: 'integer' },
                isActive: { type: 'integer' }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    model: { type: 'string' },
                    yearOfManufacturing: { type: 'string' },
                    lastMaintenanceDate: { type: 'string' },
                    isActive: { type: 'integer' }
                }
            }
        }
    }
}



const deleteOpt = {
    schema: {}
}

function routes (fastify, options, done) {
   /*const trainCollection = fastify.trains.db.collection('trains')*/

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