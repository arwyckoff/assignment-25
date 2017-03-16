import React from 'react'
import {ACTIONS} from '../actions.js'

export const RegisterComponent = React.createClass({

  getInitialState: function(){
    return [

      imgPreviewLink: ""
    ]
  },

  _handlePreviewImageLink: function(evt){
    evt.preventDefault();
    let imgDomEl = this.refs.previewImgEl
    if(imgDomEl.value.length > 0){
      this.setState({
        imgPreviewLink: imgDomEl.value

      })
    } else {
      this.setState({
        imgPreviewLink: "http://onthewayhome2.com/wp-content/themes/pashmina/images/blank.png"
      })
    }
  },

  render: function(){
    let imgPreviewSource = "http://onthewayhome2.com/wp-content/themes/pashmina/images/blank.png"
    if(this.state.imgPreviewLink > 0){
      imgPreviewSource = this.state.imgPreviewLink
    }
      return (
      <div className="auth-form">
        <form onSubmit={this._handleSignUp}>
             <h4>Username</h4>
               <input type="text" className="form-control" name="usernameInput"/>
             <h4>Password</h4>
                <input type="password" className="form-control" name="passwordInput"/>
             <h4>Make an Avatar</h4>
                <input type="text" className="form-control" name="imgInput" ref="previewImgEl"/>
             <button className="btn btn-default btn-warning btn-med"
   			   			onClick={this._handleImgPreviewClick}>
   			   			Avatarize Meh!
   			     </button>
             <br/>
           <div href="#" className="thumbnail">
	               <img src={imgPreviewSrc} alt="no image found"/>
	         </div>
             <button className="btn btn-block btn-success btn-lg" type="submit">Get Legit</button>
        </form>
      </div>
      )
  },

  _handleSignUp: function(evt){
    evt.preventDefault();
    let formEl = evt.target
    let objToSave = {
      username:formEl.usernameInput.value,
      password:formEl.passwordInput.value,
      avatarUrl:this.state.imgPreviewLink
    }
    ACTIONS.registerNewUser(objToSave)
  }
})
