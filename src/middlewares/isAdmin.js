module.exports = function(req, res, next) {
    if (!req.session.userLogged.is_admin){
        return res.send("error")
    }else{
        next();
    }
};