const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send({
        title: 'Welcome to my API',
        author: 'Carlos Alba',
        dateOfOriginal: 'July 10th 2018'
    });
});



module.exports =  router;