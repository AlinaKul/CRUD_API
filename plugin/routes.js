const getOpt = {
    schema: {
        responese:{
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' }
                    model: { type: 'string' }
                    yearOfManufacturing: { type: 'number' }
                    lastMaintenanceDate: { type: 'string' }
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
                        id: { type: 'number' }
                        model: { type: 'string' }
                        yearOfManufacturing: { type: 'number' }
                        lastMaintenanceDate: { type: 'string' }
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
                
            }
        }
    }
}

const deleteOpt = {
    schema: {}
}

function routes (fastify, options, done) {
    fastify.get('/', getOpt, async (request, reply) => {

    });

    fastify.get('/:id', getOpts, async (request, reply) => {
        
    });

    fastify.post('/', postOpt, async (request, reply) => {
        
    });

    fastify.put('/', putOpt, async (request, reply) => {
        
    });

    fastify.delete('/:id', deleteOpt, async (request, reply) => {
        
    });
    
    
    
    
    

    done ();
    
}

module.exports = routes