const {Schema, model} = require('mongoose');

const levelSchema = Schema({
    nombre:{
        type: 'String',
        required: true,
    },
    ruta:{
        type: 'String',
        required: true,
    },
    duracion:{
        type: 'String',
        required : true,
    }
});




module.exports = model ("level", levelSchema);


