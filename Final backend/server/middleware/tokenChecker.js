const jwt = require('jsonwebtoken')
const secrertkey = 'hsdv545eet625632rE$@#E$!@WDXcsd62r35E'

module.exports = (req, res, next)=>{
    let token = req.headers['authorization']
    if(!!token)
    jwt.verify(token, secrertkey, (err, data)=>{
        if(err)
        res.send({ success:false, status:300, message:'Unauthorized access'})
        else{
            req.decoded = data
            next()
        }
    })
    else
    res.send({success:false, status:400, message:"No token Found"})
}