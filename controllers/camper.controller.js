const Camper = require('../models/Camper');
const bycryptjs = require('bcryptjs');

const getCamper = async (req,res) => {
    try {
        const campers = await Camper.find();
        res.json(campers)
    } catch (error) {
        res.status(404).send(error);
    }   
}

const postCamper = async (req, res) => {
    try {
        const {nombre,email,password,rol} = req.body;
        const camper = new Camper({nombre,email,password,rol});

        const salt = bycryptjs.genSaltSync();
        camper.password = bycryptjs.hashSync(password, salt);

        await camper.save();
        res.json({
            "message": "post camper",
            Camper
        })
    } catch (error) {
        res.status(404).send(error);
    }
}






module.exports = {
    getCamper,
    postCamper

}