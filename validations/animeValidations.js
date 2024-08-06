const checkForTitleKey = (req, res, next) => {
    if(req.body.hasOwnProperty('title')) {
        next()
    } else {
        res.json({error: "Anime must contain a title"})
    }
}

module.exports = { checkForTitleKey }