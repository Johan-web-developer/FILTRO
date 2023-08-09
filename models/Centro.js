const {Schema, model} = require('mongoose');


const centroSchema = Schema({
    nombre:{
        type: 'String',
        required: true,
    },
    descripcion:{
        type: 'String',
        required: true,
    },
    estado :{
        type: 'String',
        required: true,
    },
    ciudad: {
        type: 'String',
        required: true,
    }
    
});



module.exports = model ("centro", centroSchema);