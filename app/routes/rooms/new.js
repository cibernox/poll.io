export default Ember.Route.extend({
  model: function(){
    return this.get('store').createRecord('room');
  },

  actions: {
    save: function(room){
      var route = this;

      room.save().then(function(room) {
        route.transitionTo("rooms.show", room);
      });
    }
  }
});