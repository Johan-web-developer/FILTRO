const Level = require('../models/Level');

const getLevel = async (req,res) => {
    try {
        const levels = await Level.find();
        res.json(levels);
    } catch (error) {
        res.status(404).send(error);
    }
}


const postLevel = async (req, res) => {
    try {
        const {nombre,ruta,duracion} = req.body;
        const level = new Level({nombre,ruta,duracion});

        await level.save();
        res.json({
            "message": "post level",
            Level
        })
    } catch (error) {
        res.status(404).send(error);
    }
}


module.exports = {
    getLevel,
    postLevel
}