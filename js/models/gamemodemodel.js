module.exports= Backbone.Model.extend({
  initialize: function(){
    this.name = null;
  },

  defaults:{
    energyTank: 50,
    startingTank: 50,
    fuelBurn: 2,
    localX: 5,
    localY: 5,
    energyPosX: Math.round(Math.random() *20),
    energyPosY: Math.round(Math.random()*20),
    StowPosX: Math.round(Math.random() *20),
    StowPosY: Math.round(Math.random()*20),
    podHit: 0,
    podPower: Math.round(Math.random()*50),
    dimensionTop: 20,
    dimensionBottom: 0,
    shipChoice: 'Escape Pod',
    name: 'Pilot',
    score: 0,
  },

  nameOfPlayer: function(charInput){
    this.set('name', charInput);
    console.log(charInput);
  },

  burntEnergy: function(){
    this.set('energyTank', this.get('energyTank') - this.get('fuelBurn'));
  },

  scoreSaver: function(){
    if(this.get('score') > this.get('highScore')){
      this.set('highScore', this.get('score'));
      this.set('userHighScore', this.get('name'));
    }
  },

  firstPlayer: function(){
    var starter = document.getElementById('player-block');
    if(starter !== null){
      starter.removeAttribute('id', 'player-block');
    }
    var player1 = document.getElementById('parsec-' +this.get('localX')+'-'+this.get('localY'));
    if(player1 !== null){
      player1.setAttribute('id', 'player-block');
    }
  },

  //Random passenger creation
  newPassenger: function(){
    var starter = document.getElementById('stowaway-block');
    if(starter !== null){
      starter.removeAttribute('id', 'stowaway-block');
    }
    var rider = document.getElementById('parsec-' + this.get('StowPosX') + '-' + this.get('StowPosY'));
    if(rider !== null){
      rider.setAttribute('id', 'stowaway-block');
    }
  },

  //Random energy generator
  RandoEnergyLocal: function(){
    this.set('energyPosX', Math.round(Math.random() * 20));
    this.set('energyPosY', Math.round(Math.random() * 20));
    this.set('energyTank', this.get('energyTank')+ (Math.round(Math.random() * 50)));
    if(this.get('energyTank') >= this.get('startingTank')){
      this.set('energyTank', this.get('startingTank'));
    }
  },

  //Controled Movements
  shipMovesUp: function(){
    if(this.get('localY') < this.get('dimensionTop')){
      this.set('localY', (this.get('localY') +1));
      this.burntEnergy();
    }
  },

  shipMovesDown: function(){
    if(this.get('localY') > this.get('dimensionBottom')){
      this.set('localY', (this.get('localY') -1));
      this.burntEnergy();
    }
  },

  shipMovesRight: function(){
    if(this.get('localX') < this.get('dimensionTop')){
      this.set('localX', (this.get('localX') +1));
      this.burntEnergy();
    }
  },

  shipMovesLeft: function(){
    if(this.get('localX') > this.get('dimensionBottom')){
      this.set('localX', (this.get('localX') -1));
      this.burntEnergy();
    }
  },

});
