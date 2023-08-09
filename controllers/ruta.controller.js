const Rutas = require('../models/Ruta');

const getRutas = async (req,res) => {
    try {
        const rutas = await Level.find();
        res.json(rutas);
    } catch (error) {
        res.status(404).send(error);
    }
}


const postRutas = async (req, res) => {
    try {
        const {nombre,centro} = req.body;
        const rutas = new Level({nombre,centro});

        await rutas.save();
        res.json({
            "message": "post level",
            Rutas
        })
    } catch (error) {
        res.status(404).send(error);
    }
}


module.exports = {
    getRutas,
    postRutas
}