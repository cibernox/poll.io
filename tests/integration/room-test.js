import startApp from '../helpers/start-app';
import { test, moduleFor } from 'ember-qunit';

var App;

module('Integration: Rooms', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    App.reset();
  }
});

test('create a new room', function() {
  visit('/rooms/new');
  fillIn('.room-title', 'My room title');
  fillIn('.room-body', 'Lorem ipsum dolor sit amet ...');
  click('button.submit');

  andThen(function() {
    equal(currentRouteName(), 'rooms.show');
    equal(find('.room-title').text(), 'My room title');
    equal(find('.room-body').text(), 'Lorem ipsum dolor sit amet ...');
  });

  visit('/rooms');
  andThen(function() {
    var tableText = find('.rooms-table').text();
    equal(currentRouteName(), 'rooms.index');
    ok(/My room title/.test(tableText));
    ok(/Lorem ipsum dolor sit amet \.\.\./.test(tableText));
  });
});

test('destroy a room', function() {
  visit('/rooms/1');
  click('button.delete');

  andThen(function() {
    var tableText = find('.rooms-table').text();
    equal(currentRouteName(), 'rooms.index');
    ok(!/Title A/.test(tableText));
    ok(!/Body A/.test(tableText));
  });
});