const router = require('express').Router()
const userModel = require('../Models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
 
router.post('/register', async(req, res)=>{
    try{
        let { username, email, password} = req.body;

        if(username < 4) {
            return res.status(400).json({msg: "Username must contain atleast than 4 characters"})
        }

        const userName = await userModel.findOne({username: username});
        const userEmail = await userModel.findOne({email: email});

        if(userName) {
            return res.status(400).json({msg: "UserName Already exists"});
        }
        if(userEmail) return res.status(400).json({msg: "Email Already exists"})
        
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                const newUser = await userModel.create({
                    username,
                    email,
                    password: hash,
                })
                res.send(newUser)
            })
        })
         
    } catch(err){
        console.log(err.message)
    }

    

})

router.post('/login', async(req, res)=>{
    try {
        let {email, password} = req.body;
        
        const user = await userModel.findOne({email: email});
        if(!user) return res.status(400).send("invalid credentials");

        bcrypt.compare(password, user.password, function(err, result){
            if(result){
                const token = jwt.sign({email}, 'ascascdcvdvdhvdsc')
                // req.cookies.set('token', token)
                res.send({user, token})   
            }
            else{
                return res.status(400).send("invalid credentials");
            }
        })
        
    } catch (err) {
       console.log(err.message) 
    }

})

module.exports = router;