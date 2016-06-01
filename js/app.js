window.addEventListener('load', function(){
  var GamerRoute1= require('./router.js');

  var router = new GamerRoute1();
  Backbone.history.start();

  router.navigate();

});
