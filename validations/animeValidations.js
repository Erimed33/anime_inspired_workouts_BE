const checkForTitleKey = (req, res, next) => {
    if(req.body.title) {
        next()
    } else {
        res.status(400).json({error: "Anime must contain a title"})
    }
}

module.exports = { checkForTitleKey }