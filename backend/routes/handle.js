const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const str = [{
        "name": "Carlos",
        "msg": "You are of the size your Dream",
        "username": "carlos123"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addTwwt', (req, res) => {
   res.end('NA');
});

module.exports = router;
