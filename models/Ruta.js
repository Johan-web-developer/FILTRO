const {Schema,model} = require('mongoose');

const rutaSchema = Schema({
    nombre : {
        type: 'string',
        required: true,
    },
    centro : {
        type: 'string',
        required: true,
    }
})