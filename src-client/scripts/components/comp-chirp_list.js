import React from "react"

export const ChirpListComponent= React.createClass({

  _makeChirpComponents: function(chirpsList){
    let arrayOfChirpComponents =chirpsList.map(function(smod, i){
      return (
        <ChirpItem chirpData={smod} key={i}/>
      )
    }).reverse()
      return arrayOfChirpComponents
    },


  render: function(){
    let self = this
    let allChirps = this.props.chirpListData

    return(
      <div className="col-sm-8">
                 <h2>CHIRPS HERE</h2>

                 <div className="chirps-list">
                  {this._makeChirpComponents(allChirps)}
                 </div>
              </div>
    )
  }

})

export const ChirpItem = React.createClass({

  _renderImg: function(){
    if(this.props.chirpData.imgLink !== undefined){
      return(
        <img src={this.props.chirpData.imgLink} alt="..."/>
      )
    }else{
      return
    }
  },

  render: function(){
    return (
         <blockquote>
            <p>{this.props.chirpData.msg}</p>
            {this._renderImg()}
              <div className="text-center">
            	    {/* <cite className="bg-info">{this.props.chirpData.user}</cite>*/}
              </div>
         </blockquote>
    )
  }
})
