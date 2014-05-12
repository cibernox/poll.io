var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('rooms', function(){
    this.route('show', { path: '/:id' });
    this.route('new');
  });
});

export default Router;
