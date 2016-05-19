'use strict';
class exampleModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}

	getExample(){
		return {"hello":"hi"};
	}
	insertExample(example){

	}
	updateExample(id){

	}
	deleteExample(id){

	}
}
module.exports = new exampleModel();
