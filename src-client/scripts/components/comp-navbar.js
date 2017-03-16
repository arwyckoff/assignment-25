import React from "react"
import {ACTIONS} from "../actions.js"

export const Navbar = React.createClass({

    _getMenuOptions: function(currentUser){
      let routeList
        if(currentUser.length === 0){
          routeList = [
            {appRouteName:"HOME", displayText:"Home", hashRoute:""},
            {appRouteName:"REGISTER", displayText:"Sign Up", hashRoute:"register"},
            {appRouteName:"LOGIN", displayText:"Log In", hashRoute:""},
          ]
        } else {
          routeList = [
            {appRouteName:"HOME", displayText:"Home", hashRoute:""},
            {appRouteName:"NEWCHIRP", displayText:"New Chirp", hashRoute:"chirpform"},
            {appRouteName:"LOGOUT", displayText:"Log Out", hashRoute:"logout"},
          ]
        }

        return routeList
  },

    _showNavOptions: function(currentNavRoute, currentUser){
      let theMenuRoutes = this._getMenuOptions(currentUser)
      let componentsList = theMenuRoutes.map(function(userObj, i){
        return <RouteOption {...userObj} key={i} _currentNavRoute={currentNavRoute}/>
      })
        return componentsList
    },

  render: function(){


      return (
        <nav style={ {background: "white" } }>
             { this._showNavOptions(this.props.currentNavRoute, this.props.currentUser )}
            </nav>
      )
  }
})

export const RouteOption = React.createClass({

  _handleNavClick:function(evt){
    ACTIONS.changeCurrentNav(this.props.appRouteName, this.props.hashRoute)
  },


  render: function(){
    let navOptionClassName = "nav-option"
    if(this.props.appRouteName === this.props._currentNavRoute){
      navOptionClassName = "nav-option nav-option-active"
    }


    return (
      <div onClick={this._handleNavClick}
       className={navOptionClassName}>
      {this.props.displayText}
      </div>
    )
  }
})
