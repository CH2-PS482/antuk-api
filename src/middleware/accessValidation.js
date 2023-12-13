const accessValidation = (req, res, next) => {
    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({
            message: 'Token required'
        })
    }

    const token = authorization.split(' ')[1]
    const secret = process.env.SECRETKEY

    try {
        const jwtDecode = jwt.verify(token, secret)
    } catch (error){
        
    }

}