import React from "react"
import Backbone from "backbone"
import {ChirpModel} from "../models/model-chirp.js"
import {ACTIONS} from "../actions.js"

export const NewChirpComponent= React.createClass({

  getInitialState: function(){
    return {
    			imgPreviewLink: 'http://rednova8.com/wordpress/wp-content/uploads/2017/02/no-image-found.jpg'
    		}
  },

  _handleNewChirpItem: function(evt){
    evt.preventDefault();
    let formEl = evt.target
    let formValsObj = {
      msg: formEl.msgEl.value,
      imgLink: formEl.imgEl.value,
    }

      ACTIONS.saveNewChirp(formValsObj)
  },

  render: function(){

    return (
       <div className="col-sm-4 new-chirp">
        <h3>CHIRP</h3>
        <form onSubmit={this._handleNewChirpItem}>
             <input type="text" className="form-control" name="msgEl"/>
          <hr/>
        <h4>CHIRPIC</h4>
            <input type="text" className="form-control" name="imgEl"/>
          <br/>
	          <button className="btn btn-block btn-success btn-lg" type="submit">LET THERE BE CHIRP!</button>
				</form>
      </div>

   )
  }
})
