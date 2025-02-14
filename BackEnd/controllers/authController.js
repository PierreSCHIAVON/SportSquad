const userService = require('../services/userService');

// Function to get all events
async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const response = await userService.login(email, password);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { loginUser };