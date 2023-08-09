const {Router} = require('express');
const {check} = require('express-validator');
const {getCentro, postCentro} = require('../controllers/centro.controllers.js');


const router = Router();
router.get("/", getCentro);
router.post("/",[
    check('nombre','El nombre debe ser obligatorio').not().isEmpty(),
], postCentro);


module.exports = router;