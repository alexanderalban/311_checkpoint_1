const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const sampleUser = require('../data/sampleUser');

// Links to the "list all users" function controller
router.get('/users/', userController.listUsers);

// Links to the "show one user" function controller
router.get('/users/:id', userController.showUser);

// Links to the "create user" function controller
router.post('/users/', userController.createUser);

// Links to the "update user" function controller
router.put('/users/:id', userController.updateUser);

// Links for the "delete user" function controller
router.delete('/users/:id', userController.deleteUser);

module.exports = router;