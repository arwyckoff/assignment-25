import React from 'react';
import {Navbar} from './components/comp-navbar.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';
import {HomeView} from './views/viewhome.js'
import {RegisterView} from './views/viewregister.js'
import {LoginView} from './views/viewlogin.js'


export const ViewController = React.createClass({

getInitialState: function(){
  ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
  let storeObj = STORE.getStoreData()
  return storeObj
},

componentDidMount: function(){
  let component = this

  STORE.onStoreChange(function(){
    let newStoreObj = STORE.getStoreData()
    component.setState(newStoreObj)
  })
    ACTIONS.fetchCurrentUser()
},

render: function(){

  let componentToRender

  switch(this.state.currentNavRoute){
    case "LOGIN":
      componentToRender = <LoginView {...this.state}/>
    break;
    case "HOME":
      componentToRender = <HomeView {...this.state}/>
    break;
    case "REGISTER":
      componentToRender = <RegisterView {...this.state}/>
    break;
  default:
  }

  return (

      <div>
      <Navbar {...this.state}/>
      </div>

    )
  }
})
