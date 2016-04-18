var NewChars = require('./views/newcharsattack');
var GameActivate = require('./views/gameactionset');
var EndGame = require('./views/endGame');
var GameModel = require('./models/gamemodemodel');

module.exports = Backbone.Router.extend({
  initialize: function(){
      this.gameModel = new GameModel();
      this.activeView = null;
  },
  routes: {
    'newplayer': 'newPlayer',
    'play': 'playGame',
    'end': 'endGame',
  },

  newPlayer: function(){
    //console.log('new game?');
    if(this.activeView !== null){
      this.activeView.el.innerHTML = '';
      this.activeView.undelegateEvents();
    }
    this.activeView = new NewChars({
      model: this.gameModel,
      el: document.getElementById('new-player-section'),
    });
    this.activeView.render();
  },

  playGame: function(){
    console.log('play the game');
    if(this.activeView !== null){
      this.activeView.el.innerHTML = '';
      this.activeView.undelegateEvents();
    }
    this.activeView = new GameActivate({
      model: this.gameModel,
      el: document.getElementById('play-game-section'),
    });
    this.activeView.render();
  },

  endGame: function(){
    console.log('game over');
    if(this.activeView !== null){
      this.activeView.el.innerHTML = '';
      this.activeView.undelegateEvents();
    }
    this.activeView = new EndGame({
      model: this.gameModel,
      el: document.getElementById('end-game-template'),
    });
    this.activeView.render();
  },
});
