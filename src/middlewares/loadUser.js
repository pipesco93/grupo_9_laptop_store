
module.exports = function(req, res, next) {
    console.log(req.session)
    if(res && req.session){
        res.locals.user = req.session.userLogged;
        console.log('usuario logged');
        return next();
    }
    next();
};