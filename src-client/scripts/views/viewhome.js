import React from 'react'
import {STORE} from "../store.js"
import {ACTIONS} from "../actions.js"
import {NewChirpComponent} from "../components/comp-new_chirp.js"
import {ChirpListComponent} from "../components/comp-chirp_list.js"

export const HomeView = React.createClass({

getInitialState: function(){
  return STORE.getStoreData()
},

componentDidMount: function(){
   let component = this;
   STORE.onStoreChange(function(){
     component.setState( STORE.getStoreData() )
   })
   ACTIONS.fetchAllChirps()
 },

  render: function(){

    return (
      <div className ="container">
      <h1>CHIRP</h1>
      <NewChirpComponent/>
      <ChirpListComponent chirpListData={this.state.chirpList}/>
      </div>

    )
  }


})
