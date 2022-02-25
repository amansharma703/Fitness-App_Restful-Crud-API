const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require('../models/users');

// create a new User
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        const height = user.height;
        const weight = user.weight;
        const bmi = weight / Math.pow(height, 2);
        user.bmi = bmi;

        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

// read data from db
router.get('/', async (req, res) => {
    try {
        const usersData = await User.find();
        res.status(200).send(usersData);
    } catch (err) {
        res.status(400).send(err);
    }
});

// get the indiviual user  data from db
router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const usersData = await User.findById(_id);
        res.status(200).send(usersData);
    } catch (err) {
        res.status(400).send(err);
    }
});

// get and update the indiviual user  data from db
router.put('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateUser = await User.findByIdAndUpdate(_id, req.body, { new: true });
        const height = updateUser.height;
        const weight = updateUser.weight;
        const bmi = weight / Math.pow(height, 2);
        updateUser.bmi = bmi;
        const createUpdateUser = await updateUser.save();
        res.status(200).send(createUpdateUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

// get and delete the indiviual user  data from db
router.delete('/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.status(200).send(deleteUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
