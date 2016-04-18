window.addEventListener('load', function(){
  var GamerRoute1= require('./router');

  var router = new GamerRoute1();
  Backbone.history.start();

  router.navigate();

});
