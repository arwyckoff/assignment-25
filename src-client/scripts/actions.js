import Backbone from "backbone"
import {STORE} from "./store.js"
import {ChirpModel, ChirpCollection} from "./models/model-chirp.js"
import {UserModel} from './models/model-user.js'

export const ACTIONS = {
  saveNewChirp: function(chirpFormEntry){
    let newChirpInstance = new ChirpModel()
        newChirpInstance.set(chirpFormEntry)
        newChirpInstance.save().then(function(serverRes){
          ACTIONS.fetchAllChirps()
        })
  },

  fetchAllChirps: function(){
    let chirpCollectionInstance = new ChirpCollection()
        chirpCollectionInstance.fetch().then(function(serverRes){
          STORE.setStore("chirpList", serverRes)

        })
  },

  changeCurrentNav:function(selectedAppRoute, urlRoute){
    STORE.setStore('currentNavRoute', selectedAppRoute)
    window.location.hash = urlRoute
  },

  registerNewUser:function(newUserObj){
    UserModel.register(newUserObj).then(function(serverRes){
      ACTIONS.changeCurrentNav("HOME", "Home")
    })
  },

  loginUser: function(username, password){
    UserModel.logIn(username, password).then(function(serverRes){
      STORE.setStore("currentUser", serverRes)
      ACTIONS.changeCurrentNav("HOME", "Home")
    })
  },

  fetchCurrentUser: function(){
    UserModel.getCurrentUser().then(function(serverRes){
      if(serverRes.user !== null){
        STORE.setStore("currentUser", serverRes.user)
      }
    })
  }

}
