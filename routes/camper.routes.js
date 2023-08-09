const {Router} = require('express');
const {check} = require('express-validator');
const {getCamper, postCamper} = require('../controllers/camper.controller.js');


const router = Router();
router.get("/", getCamper);
router.post("/",[
    check('nombre','El nombre no puede estar vacio').not().isEmpty(),
    check('email', 'El email tiene que ser valido').isEmail(),
    check('password', 'Tiene que contener minimo 8 caracteres').isLength({ min: 8 })
], postCamper);


module.exports = router;