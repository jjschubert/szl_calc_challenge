const express = require('express');
const router = express.Router();

const calcStrings = []

router.get('/', (req, res) => {
    
    res.send(calcStrings)
});

router.post('/', (req, res) => {

calcStrings.push(req.body.stringToSend)
console.log('updated calcStrings', calcStrings)

if (calcStrings.length >= 10) {
    calcStrings.shift()
}
console.log(calcStrings)
res.sendStatus(201);
})

module.exports = router;