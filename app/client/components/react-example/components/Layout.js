import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import actions from '../example.actions.js';

//layout is the container here
export default class Layout extends React.Component {

  constructor() {
    super();
    //register any rx events here?
    this.state = {
      title: "Welcome!"
    };

    //data loaded from title
    actions.dataLoaded$.subscribe((data)=>{
        this.setState({title:data.hello});
    })

  }
  //we can dispatch event data here 
  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
