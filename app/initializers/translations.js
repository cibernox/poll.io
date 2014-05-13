import { simpleI18n } from 'ember-simple-i18n';

export default {
  name: 'translations',
  initialize: function(containter, app) {
    app.deferReadiness();
    app.deferReadiness();
    simpleI18n.setDefaultLocale("pt-BR", '/translations/pt-BR.json', function(){
      app.advanceReadiness();
    });
    simpleI18n.setLocale('es-ES', '/translations/es-ES.json', function(){
      app.advanceReadiness();
    });
    simpleI18n.setFallbacks(true);
  }
};