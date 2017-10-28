import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

<<<<<<< HEAD
const { Application } = Ember;

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Application.extend({
=======
const App = Application.extend({
>>>>>>> 592d580... diff
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
