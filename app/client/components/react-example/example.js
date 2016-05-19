'use strict';
var view = require('./example.view.js');
var model = require('./example.model.js');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');

class exampleMain{

	constructor(){

		this.view = view;

        //load data and dispatch the event
        var example = model.getExample();
        dispatcher.emit("example.dataLoaded$",example);


	}

}
module.exports = new exampleMain();
