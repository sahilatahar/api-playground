const userService = require("../services/user");

const getUsers = (req, res) => {
    const users = [];
    let count = 1;
    if (req.query.count) {
        count = req.query.count;
    }

    for (let i = 1; i <= count; i++) {
        const user = userService.getUser();
        users.push(user);
    }
    return res.json(users);
}

module.exports = { getUsers }