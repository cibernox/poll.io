export default Ember.Route.extend({
  actions: {
    delete: function(room){
      var route = this;

      room.deleteRecord();
      room.save().then(function(){
        route.transitionTo('rooms.index');
      });
    }
  }
});