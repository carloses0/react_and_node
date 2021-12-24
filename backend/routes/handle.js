const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Carlos",
        "msg": "Qualquer mensagem do Carlos que seja mais legal do que um elefante voando no céu da amazõnia",
        "username": "carlos123"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTwwt', (req, res) => {
   res.end('NA');
});

module.exports = router;