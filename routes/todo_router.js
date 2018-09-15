var express = require('express')
    , router = express.Router()
    , {getAll
     , getById
     , postIt
     , putIt
     , deleteIt} = require('../controllers/todo.js');



router.get('/', getAll);
router.get('/:id', getById);

router.post('/', postIt);

router.put('/:id', putIt);

router.delete('/:id', deleteIt);

module.exports = router;