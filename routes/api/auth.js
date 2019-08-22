const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//Bring in user model
const User = require('../../models/User');

router.post('/', (req, res) => {
    const { email, password } = req.body;

    //validation
    if(!email || !password) {
        return res.status(400).json({ msg: "Please enter all fields"});
    }

    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: "User does not exist" });

            //validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: "Invalid Password or Email" });
                
                    jwt.sign(
                        { id: user.id },
                        process.env.jwtSecret,
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name, 
                                    email: user.email
                                }
                            });
                        }
                    )
                })
            
        })
});

//Route for GET api/auth/user to get user data
router.get('/user', auth, (req, res)=> {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
});



module.exports = router;