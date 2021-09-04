const { Router } = require('express');

// services
const ResultsServices = require('../services/results.services.js');
const resultsServices = new ResultsServices;
// dtos
const resultDto = require('../dtos/result.dto.js')
// middleware
const validationDto = require('../../middleware/validateDto.js')

const router = Router();

router.get('/', resultsServices.getResults);
router.get('/:id', resultsServices.getResult);
router.post('/', [resultDto, validationDto], resultsServices.createResult);
router.put('/:id', resultsServices.updateResult);
router.delete('/:id', resultsServices.deleteResult);

module.exports = router;
