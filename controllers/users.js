const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

// Retrieve entire array from data/index
const listUsers = ('/users/', function (req, res) {
    res.json(users)
});


// Retrieve just the user that matches the passed in id
const showUser = ('/users/:id', function (req, res) {
    const usersID = req.params.id;
    for (let user of users) {
        if (user.id === parseInt(usersID)) {
            res.json(user)
        }
    }
});

// Should add a user to the array
// const createUser = ('/users/', (req, res) => {
//     const newUser = {
//         id: users.length + 1,
//         name: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//         address: req.body.address,
//         phone: req.body.phone,
//         website: req.body.website,
//         company: req.body.company,
//     }
// })

const createUser = ('/users/', (req, res) => {
    const newUser = {
        ...sampleUser
    };

    
})