'use strict';
var Rx = require('rx');
var view = require('./example.view.js');

class exampleMain{

	constructor(){
		this.view = view;
	}

}
module.exports = new exampleMain();
