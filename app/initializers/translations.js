import { setDefaultLocale, setLocale, setFallbacks } from 'ember-simple-i18n';

export default {
  name: 'translations',
  initialize: function(containter, app) {
    app.deferReadiness();
    app.deferReadiness();
    setDefaultLocale("pt-BR", '/translations/pt-BR.json').then(function(){
      app.advanceReadiness();
    });
    setLocale('es-ES', '/translations/es-ES.json').then(function(){
      app.advanceReadiness();
    });
    setFallbacks(true);
  }
};