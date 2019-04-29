import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Twitter from 'twitter';
import twitterApiConfig from './twitter-api-config'

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

const client = new Twitter(twitterApiConfig);

loadInitializers(App, config.modulePrefix);

export default App;
