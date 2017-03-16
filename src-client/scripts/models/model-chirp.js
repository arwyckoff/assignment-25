import Backbone from "backbone"

  export const ChirpModel = Backbone.Model.extend({
    urlRoot: "/api/chirps",
    idAttribute: "_id"
  })

  export const ChirpCollection = Backbone.Collection.extend({
    model: ChirpModel,
    url: "/api/chirps"
  })
