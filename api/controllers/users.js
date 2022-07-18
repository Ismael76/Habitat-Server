const User = require('../models/User');

async function create (req, res) {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;
        const user = await User.create(username, email, password);
        console.log(user);
        res.status(201).json(user)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { create }