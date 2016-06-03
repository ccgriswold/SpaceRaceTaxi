module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  events:{
    'click #playersubmit': 'newChar',
  },
  template: _.template(document.getElementById('end-game-template').textContent),

  render: function(){
    var html = this.template({
      name: this.model.get('name'),
      score: this.model.get('score'),
      highScore: this.model.get('highScore'),
      highUser: this.model.get('highUser'),
    });
    this.el.innerHTML = html;
  },
  newChar: function(){
    window.location.reload();
    Backbone.history.navigate('#/newChar', {trigger:true});
  },
});
