const express = require('express') //Import express module
const router = require('express').Router(); //Import router function
const { User } = require('../../models'); //Import user object
const bcrypt = require('bcrypt'); //Import bcrypt module to encrypt passwords
const app = express(); //Initialize express app


// GET /signin route
router.get('/', async (req, res) => {
    if (!req.session.userloggedin) // check if user is not loggedin
    {
        res.render('signin', { userloggedin: req.session.userloggedin })
    }
    else // if user is logged in and trying to access signin page, re-direct to home page
    {
        res.redirect('/')
    }

})

// POST signin route for login page.
router.post('/', async (req, res) => {
    let user = await User.findOne({ where: { email: req.body.email } })
    if (user !== null && req.session) {
        user = user.get({ plain: true })
        console.log(user)
        const checkPassword = await bcrypt.compare(req.body.password, user.password)
        if (user.email == req.body.email && checkPassword) {
            console.log('User sucessfuly loggedin')
            req.session.userloggedin = true;
            req.session.email = user.email;
            res.redirect('/')
        }
        else {
            res.send("Username or password is incorrect")

        }
    }
    else {
        res.send("Username or password is incorrect")
    }
})

module.exports = router