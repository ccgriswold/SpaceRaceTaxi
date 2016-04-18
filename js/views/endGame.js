module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  events:{
    'click #playersubmit': 'newChar',
  },
  template: _.template(document.getElementById('end-game-template').textContent),

  render: function(){
    var gameScore = this.template({
      name: this.model.get('name'),
      score: this.model.get('podHit'),
    });
    this.el.innerHTML = gameScore;
  },
  newChar: function(){
    window.location.reload();
    Backbone.history.navigate('#/newChar');
  },
});
