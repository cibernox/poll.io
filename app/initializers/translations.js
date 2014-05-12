import { I18n } from 'ember-simple-i18n';

export default {
  name: 'translations',
  initialize: function() {
    I18n.translations.en = {
      test1: "This is a test",
      title: "This is a title",
      nested: {
        nestedTest: "This is a nested test"
      }
    };
  }
};