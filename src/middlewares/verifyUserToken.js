const verifyUserToken = (req, res, next) => {
    const userId = req.headers['x-access-token']

    if(!userId) return res.status(401).json({error: 'User unauthorized'})

    req.userId = userId

    next()
}

module.exports = verifyUserToken