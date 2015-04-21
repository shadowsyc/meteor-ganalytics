Package.describe({
  summary: "Publish pageviews, events, screenviews to Google Analytics using the new analytics.js code.",
  version: "0.2.2",
  name: "shadowsyc:ganalytics",
  git: 'https://github.com/shadowsyc/meteor-ganalytics.git'
});

Package.onUse(function (api) {

  api.addFiles(['ganalytics.js'], 'client');
  
  api.export(['GAnalytics'], 'client');

});