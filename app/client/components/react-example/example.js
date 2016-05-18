'use strict';
var Rx = require('rx');
var view = require('./example.view.js');
var actions = require("./example.actions.js");
var model = require("./example.model.js");

class exampleMain{

	constructor(){
		this.actions = actions;
		this.view = view;
		this.model = model;
	}

}
module.exports = new exampleMain();
