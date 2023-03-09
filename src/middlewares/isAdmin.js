module.exports = function(req, res, next) {
    if (req.session.userLogged.isAdmin){
        next();
    }else{
       return res.send("error")
    }
};