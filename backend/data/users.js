const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'adminUser',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'uber',
        email: 'uber@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'ola',
        email: 'ola@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

]

module.exports = users;