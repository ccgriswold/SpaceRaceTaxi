module.exports=Backbone.View.extend({
  events:{
    'click #playersubmit': 'newChar',
    'click #fastShip': 'fastShip',
    'click #hybridShip': 'hybridShip',
  },
  template: _.template(document.getElementById('new-player-template').textContent),
  render:function(){
    this.el.innerHTML = this.template();
  },

  fastShip: function(){
    this.model.set('vehicle', 'X-Wing');
    //console.log(this.model.get('vehicle'));
    this.model.set('fuelBurn', '1');
    this.model.set('startingTank', 65);
    this.model.set('energyTank', 65);
  },
  hybridShip: function(){
    this.model.set('vehicle', 'Millennium Falcon');
    //console.log(this.model.get('vehicle'));
    this.model.set('fuelBurn', '3');
    this.model.set('startingTank', 120);
    this.model.set('energyTank', 120);
  },
  newChar: function(){
    var name = document.getElementById('playerinput').value;
    //console.log('new name: '+name);
    this.model.set('name', name);
    Backbone.history.navigate('play', {trigger: true});
  },

});
