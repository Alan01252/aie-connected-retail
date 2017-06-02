'use strict';

var util = require('util');


module.exports = {get};

//GET /product operationId
function get(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    console.log(req.swagger.params);
    res.json([{
        object_id: 'A123123ASDASDVF',
        latitude: '50.13',
        longitude: '-1'
    }, {
        object_id: 'A123123ASDASDVG',
        latitude: '50.13',
        longitude: '-1'
    }, {
        object_id: 'A123123ASDASDVH',
        latitude: '50.13',
        longitude: '-1'
    }]);
}
