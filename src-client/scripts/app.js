import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {ViewController} from "./viewcontroller.js"

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    Backbone.history.start()
  },

  routes: {
    "" : "showHomePage",
    "login" : "showLoginPage",
    "register" : "showRegisterPage",


  },

  showHomePage: function (){
    ReactDOM.render(<ViewController fromRoute={"HOME"} />, document.querySelector("#app-container"))
  },
  showLoginPage: function (){
    ReactDOM.render(<ViewController fromRoute={"LOGIN"} />, document.querySelector("#app-container"))
  },
  showRegisterPage: function (){
    ReactDOM.render(<ViewController fromRoute={"REGISTER"} />, document.querySelector("#app-container"))
  },


})

new AppRouter()
