import React from 'react'
import {Navbar} from '../components/comp-navbar.js'
import {LoginComponent} from '../components/comp-login.js'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const LoginView = React.createClass({



  render:function(){


    return (

      <div className="container">
        <LoginComponent/>
      </div>


    )
  }
})
