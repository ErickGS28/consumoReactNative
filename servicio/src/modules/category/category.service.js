const categoryRepo = require('./category.repo');
const customResponse = require('../../utils/custom.response');

const findAll = async response => {
    let list = await categoryRepo.findAll();
    return customResponse.getOK(response, 200, list);
}

const findById = async (response, id) => {
    let found = (await categoryRepo.findById(id))[0];
    return found ? customResponse.getOK(response, 200, found) : customResponse.get404(response);
}

const categoryService = {
    findAll,
    findById
}

module.exports = categoryService;