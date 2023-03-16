
module.exports = function(req, res, next) {
    if(res && req.session){
        res.locals.user = req.session.userLogged;
        console.log('usuario logged');
        next();
    }
    next();
};