const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if(!authHeader){
        res.status(401).send({message:"unauthorized Access"})
    }
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if(err){
            res.status(401).json({
                message:"Unauthorised Access"
            })
        }
        req.decoded = decoded
        next();
    });
}

module.exports = verifyJWT