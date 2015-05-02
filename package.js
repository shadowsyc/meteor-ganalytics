Package.describe({
  summary: "Adding support for user_id tracking",
  version: "0.2.4",
  name: "shadowsyc:ganalytics",
  git: 'https://github.com/shadowsyc/meteor-ganalytics.git'
});

Package.onUse(function (api) {

  api.addFiles(['ganalytics.js'], 'client');
  
  api.export(['GAnalytics'], 'client');

});