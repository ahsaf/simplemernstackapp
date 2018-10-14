const express = require('express');
const router = express.Router();

const User = require('../../models/User');


router.post('/registor', (req, res) => {
    const newUser = new User ({
      fullname : req.body.fullname,
      email : req.body.email,
      password : req.body.password
    });
    newUser.save().then(user => res.json(user));
  });

  module.exports = router;