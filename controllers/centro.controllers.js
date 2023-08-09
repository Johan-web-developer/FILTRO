const Centro = require('../models/Centro');

const getCamper = async (req,res) => {
    try {
        const centros = await Centro.find();
        res.json(centros)
    } catch (error) {
        res.status(404).send(error);
    }   
}

const postCamper = async (req, res) => {
    try {
        const {nombre,rol} = req.body;
        const centro = new Centro({nombre,rol});

        await centro.save();
        res.json({
            "message": "post centro",
            Centro
        })
    } catch (error) {
        res.status(404).send(error);
    }
}






module.exports = {
    getCamper,
    postCamper

}