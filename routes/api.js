const express = require ('express');
const router = express.Router();

router.get('/todos', (req, res, next) => {
    json ({
        hey : "heello",
    });
});

router.post('/todos', (req, res, next) => {

});

router.delete('/todos/:id', (req, res, next) => {

})

module.exports = router;