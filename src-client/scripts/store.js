export const STORE = {
  _data:{
    chirpList: [],
    currentNavRoute: "",
    currentUser: {},
  },

  getStoreData: function(){
    return this._data
  },

  setStore: function(storeProp, payload){
    this._data[storeProp] = payload

		if(typeof this._callBack === 'function'){
			this._callBack()
		}
    // this._callBack()
  },

  onStoreChange: function(cb){
    this._callBack = cb
  }

}
