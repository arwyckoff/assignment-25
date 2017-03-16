import React from 'react'
import {ACTIONS} from '../actions.js'

export const LoginComponent = React.createClass({
  _handleSubmit: function(evt){
    evt.preventDefault()
    let formEl = evt.target
    let usernameVal = formEl.usernameInput.value
		let passwordval = formEl.passwordInput.value
    ACTIONS.loginUser(usernameVal, passwordVal)
  },

  render: function(){


    return(
      <div className="auth-form">
        <form onSubmit={this._handleSubmit}>
           <h4>Username </h4>
              <input type="text" className="form-control" name="usernameInput"/>

           <h4>Password </h4>
              <input type="password" className="form-control" name="passwordInput"/>

              <button className="btn btn-block btn-success btn-lg" type="submit">Log In</button>
        </form>

      </div>
    )
  }
})
