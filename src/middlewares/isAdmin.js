module.exports = function(req, res, next) {
    if (!req.session.userLogged.isAdmin){
        return res.send("error")
    }else{
        next();
    }
};