import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.resource('posts', { path: '/r/:subreddit_id' });

  // this.route('posts', { path: '/r/:subreddit_id'})
  this.route('posts', { path: '/r/:subreddit_id'})
  this.route('tweets');
});

export default Router;
