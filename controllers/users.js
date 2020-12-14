const e = require('express');
const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

// Retrieve entire array from data/index
const listUsers = ('/users/', function (req, res) {
    res.json(users)
});


// Retrieve just the user that matches the passed in id
const showUser = ('/users/:id', function (req, res) {
    const exists = users.some(user => user.id === parseInt(req.params.id));
    if (exists) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(404).json({msg: "404 error, that user wasn't found! They might not exist."})
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
//         street: req.body.address.street,
//         suite: req.body.address.suite,
//         city: req.body.address.city,
//         zipcode: req.body.address.zipcode,
//         geo: {
//             lat: req.body.address.geo.lat,
//             lng: req.body.address.geo.lng, 
//         },
//         phone: req.body.phone,
//         website: req.body.website,
//         company: {
//             name: req.body.company.name,
//             catchphrase: req.body.company.catchphrase,
//             bs: req.body.company.bs,
//         }
//     }

//     users.push(newUser);
//     res.json(users)
// });


//Adds user using sampleUser.js, as per instructions
const createUser = ('/users/', (req, res) => {
    let previousUser = users[users.length - 1].id
    let newUserID = previousUser + 1;
    let newUser = {
        ...sampleUser
    };
    newUser.id = newUserID;
    users.push(newUser)
    res.json(users)
});

//should update an existing user in an array (uses sampleUser information, as per instructions)
const updateUser = ('/users/:id', (req, res) => {
    const userID = req.params.id
    const exists = users.some(user => user.id === parseInt(req.params.id));
    if(exists) {
        let userUpdate = users.filter(user => user.id === parseInt(req.params.id));
        userUpdate = sampleUser
        const userIdNumber = parseInt(req.params.id)
        users.splice(userIdNumber-1, 1, userUpdate)
        res.json(users)
    } else {
        res.status(404).json({ msg: '404 error, user was not found!'})
    }
});

//should delete a user in an array
const deleteUser = (req, res) => {
    const exists = users.some(user => user.id === parseInt(req.params.id));
    if(exists) {
        const userIdNumber = parseInt(req.params.id)
        users.splice(userIdNumber-1, 1)
        res.json({ msg: `User ${parseInt(req.params.id)} was deleted successfully`})
    } else {
        res.status(404).json({ msg: '404 error, user was not found! Maybe you already deleted them?'})
    }
};


module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}