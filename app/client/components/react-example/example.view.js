import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./components/Layout";

const app = document.getElementById('app');
export const comp = ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}></Route>
  </Router>,
app)
