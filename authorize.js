//This is a middleware

const authorize = (req,res,next) =>{
    const {user} = req.query
    if (user === 'john'){
        next()
    }
    res.status(401).send('Unauthorized')
}

module.exports = authorize