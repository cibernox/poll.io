var Room = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Room.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Title A', body: 'Body A' },
    { id: 2, title: 'Title B', body: 'Body B' }
  ]
});

export default Room;