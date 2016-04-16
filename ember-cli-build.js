/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/onsenui/css/onsen-css-components.css');
  app.import('bower_components/onsenui/css/onsen-css-components-blue-basic-theme.css');
  app.import('bower_components/onsenui/css/onsen-css-components-blue-theme.css');
  app.import('bower_components/onsenui/css/onsen-css-components-dark-theme.css');
  app.import('bower_components/onsenui/css/onsen-css-components-default.css');
  app.import('bower_components/onsenui/css/onsen-css-components-purple-theme.css');
  app.import('bower_components/onsenui/css/onsen-css-components-sunshine-theme.css');
  app.import('bower_components/onsenui/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.eot');
  app.import('bower_components/onsenui/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.svg');
  app.import('bower_components/onsenui/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.ttf');
  app.import('bower_components/onsenui/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff');
  app.import('bower_components/onsenui/css/material-design-iconic-font/fonts/Material-Design-Iconic-Font.woff2');
  app.import('bower_components/onsenui/css/ionicons/fonts/ionicons.eot');
  app.import('bower_components/onsenui/css/ionicons/fonts/ionicons.svg');
  app.import('bower_components/onsenui/css/ionicons/fonts/ionicons.ttf');
  app.import('bower_components/onsenui/css/ionicons/fonts/ionicons.woff');
  app.import('bower_components/onsenui/css/font_awesome/fonts/FontAwesome.otf');
  app.import('bower_components/onsenui/css/font_awesome/fonts/fontawesome-webfont.eot');
  app.import('bower_components/onsenui/css/font_awesome/fonts/fontawesome-webfont.svg');
  app.import('bower_components/onsenui/css/font_awesome/fonts/fontawesome-webfont.ttf');
  app.import('bower_components/onsenui/css/font_awesome/fonts/fontawesome-webfont.woff');
  app.import('bower_components/onsenui/css/font_awesome/fonts/fontawesome-webfont.woff2');
  app.import('bower_components/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.css');
  app.import('bower_components/onsenui/css/ionicons/css/ionicons.css');
  app.import('bower_components/onsenui/css/font_awesome/css/font-awesome.css');
  app.import('bower_components/onsenui/css/onsenui.css');
  app.import('bower_components/onsenui/js/onsenui.js');

  return app.toTree();
};
