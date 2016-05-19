'use strict';
var Rx = require('rx');
var dispatcher = require('../../lib/dispatcher/dispatcher.js');
var clientActions = require('../client/client.actions.js')

//actions we want to export to other components, for example, we want to know if the whole layout has shifted to something else
//basically, if just provides an interface for any event happening within this component
class actionMain{
  constructor(){
    var request = clientActions['changeRoute$'];
    return {
        request$: request.filter((d)=> {
          return d == "/react-example";
        }),
        post$: request.filter((d)=> {
          return /\/post\/.*/.test(d);
        }),
        viewLoaded$: Rx.Observable.fromEvent(dispatcher,'example.viewLoaded$'),
        dataLoaded$: Rx.Observable.fromEvent(dispatcher,'example.dataLoaded$')
    }
  }
}

module.exports = new actionMain();
