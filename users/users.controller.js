const express = require('express');
const router = express.Router();
const userService = require('./user.service');

router.post('/authenticate', authenticate);
router.get('/', getAll);
router.get('/test', test);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        // .then(user => console.log(user))
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function test(req, res, next) {
    console.log(test);
    console.log(req.body);
    res.send("Hello");
}
