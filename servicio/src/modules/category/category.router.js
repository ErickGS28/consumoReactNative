const router = require('express').Router();
const categoryService = require('./category.service');


router.get('', async (request, response) => {
    response = await categoryService.findAll(response);
});

router.get('/:id', async (request, response) => {
    let {id} = request.params;
    response = await categoryService.findById(response, id);
})

module.exports = router;