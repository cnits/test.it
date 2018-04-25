/**
 * @author Phong Lam
 * @description To validate all requests that access to the system
 * @version 1.0.0
 * @date Apr 25, 2018
 */
'use strict';
module.exports = function (req, res, next) {
    if (req.body.authenticated) {
        next();
    } else {
        res.send({ code: 403, status: false, msg: 'Access denied.' });
    }
};