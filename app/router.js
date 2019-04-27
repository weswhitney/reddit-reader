import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', { path: '/r/:subreddit_id' }); // this line was coded by me

  // this.route('subreddits', { path: '/r/:subreddit_id'});
});

export default Router;
