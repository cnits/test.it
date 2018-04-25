/**
 * @author Phong Lam
 * @description To handle all bussiness which refers to API
 * @version 1.0.0
 * @date Apr 25, 2018
 */
'use strict';
const libRequest = require('request');
const { APP_CENTER } = require('./../config/const');

function push(searchParams = {}) {
    return new Promise(resolve => {
        libRequest.post(APP_CENTER.URI + APP_CENTER.SERVICE.PUSH, {
            headers: {
                'X-API-Token': searchParams.apiToken,
                'Content-Type': 'application/json'
            },
            body: {
                notification_target: { type: 'devices_target', devices: [] },
                notification_content: {
                    name: 'app_server',
                    title: 'Data Changed',
                    body: 'The content of data was modified.',
                    custom_data: { version: '1.0.2' }
                }
            },
            json: true
        }, function (e, r, body) {
            resolve(body);
        });
    });
}

module.exports = {
    push: push
};