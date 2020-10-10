const express = require('express');
const router = express.Router();

const calcStrings = []

router.get('/', (req, res) => {
    
    res.send(calcStrings)
});

router.post('/', (req, res) => {

calcStrings.push(req.body.stringToSend)

//limits the array to most recent 10
if (calcStrings.length >= 10) {
    calcStrings.shift()
}
res.sendStatus(201);
})

module.exports = router;