const express = require('express');
const router = express.Router();
const marsrutaiController = require('./controllers/marsrutaiController');

router.get('/trumpiausia', marsrutaiController.trumpiausiaKelione);
router.get('/ilgiausia', marsrutaiController.ilgiausiaKelione);
router.get('/ilgesnesnei', marsrutaiController.kelionesIlgesnesNeiPara);

module.exports = router;
