import React from 'react'
import {Navbar} from '../components/comp-navbar.js'
import {RegisterComponent} from '../components/comp-register-form.js'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const RegisterView = React.createClass({



  render:function(){


    return (

      <div className="container">
        <RegisterComponent/>
      </div>


    )
  }
})
