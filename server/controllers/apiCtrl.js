/**
 * @author Phong Lam
 * @description To control all requests which refers to API
 * @version 1.0.0
 * @date Apr 25, 2018
 */
'use strict';
const apiHandle = require('./../handles/apiHdl');
module.exports = {
    push: function (req, res) {
        apiHandle.push({ apiToken: '' }).then(resp => {
            res.send(resp);
        });
    }
};