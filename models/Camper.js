const {Schema, model} = require('mongoose');

const camperShema = Schema({
    nombre:{
        type: 'String',
        required: true 
    },
    tipodeIdentificacion:{
        type: 'String',
        required: true
    },
    NroIdentificacion: {
        type: 'Number', 
        required: true
    },
    email:{
        type: 'String',
        required: true
    },
    password:{
        type: 'String',
        required : true
    },
    level:{
        type: 'String',
        required :true
    },
    levelState:{
        type: 'String',
        required : true, 
    },
    estado : {
        type: 'Boolean',
        required : true
    },
    rol:{
         type: 'String', 
        required: true
    },
    promedio:{
        type: 'Number', 
        required : true
    }

});



module.exports = model ("camper", camperShema);