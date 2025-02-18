const jwt = require('jsonwebtoken');

const authRoute = async (req, res, next)=>{
    if(!req.cookies.token){
        req.status(400).send("you need to login");
        return res.redirect('/')
    }
    try{
        let decoded = jwt.verify(req.cookies.token, 'ascascdcvdvdhvdsc')
        let user = await userModel
        .findOne({email: decoded.email})
        .select('-password')

        req.user = user;
        next();
    } catch(err) {
        console.log(err.message)
        req.send( "you need to login");
        // res.redirect('/')
    }
}

module.exports = authRoute