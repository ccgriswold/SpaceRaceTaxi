module.exports= Backbone.Model.extend({
  initialize: function(){
    this.name = null;
  },

  defaults:{
    name: "Pilot",
    energyTank: 50,
    startingTank: 50,
    fuelBurn: 2,
    localX: 9,
    localY: 9,
    energyPosX: Math.round(Math.random() *19),
    energyPosY: Math.round(Math.random()*19),
    // StowPosX: Math.round(Math.random() *19),
    // StowPosY: Math.round(Math.random()*19),
    podHit: 0,
    podPower: (15 + (Math.round(Math.random()*100))),
    dimensionTop: 20,
    dimensionBottom: 0,
    shipChoice: 'Escape Pod',
    score: 0,
    highScore: 0,
    highUser: 'MAN'
  },

  nameOfPlayer: function(charInput){
    this.set('name', charInput);
    console.log(charInput);
  },

  burntEnergy: function(){
    this.set('energyTank', this.get('energyTank') - this.get('fuelBurn'));
  },

  checkFuel: function () {
    if (this.get('energyTank') <= 0) {
      this.scoreSaver();
    }
  },

  scoreSaver: function(){
    if(this.get('score') > this.get('highScore')){
      this.set('highScore', this.get('score'));
      this.set('highUser', this.get('name'));
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
    var rider = document.getElementById('parsec-' + this.get('energyPosX') + '-' + this.get('energyPosY'));
    if(rider !== null){
      rider.setAttribute('id', 'stowaway-block');
    }
  },

  //Random energy generator
  // RandoEnergyLocal: function(){
  //   this.set('energyPosX', Math.round(Math.random() * 20));
  //   this.set('energyPosY', Math.round(Math.random() * 20));
  //   this.set('energyTank', this.get('energyTank')+ (Math.round(Math.random() * 50)+15));
  //   if(this.get('energyTank') > this.get('startingTank')){
  //     this.set('energyTank', this.get('startingTank'));
  //   }
  // },

  //Controled Movements
  shipMovesUp: function(){
    if(this.get('localY') < this.get('dimensionTop')){
      this.set('localY', (this.get('localY') +1));
      this.burntEnergy();
    }
    this.checkFuel();
  },

  shipMovesDown: function(){
    if(this.get('localY') > this.get('dimensionBottom')){
      this.set('localY', (this.get('localY') -1));
      this.burntEnergy();
    }
    this.checkFuel();
  },

  shipMovesRight: function(){
    if(this.get('localX') < this.get('dimensionTop')){
      this.set('localX', (this.get('localX') +1));
      this.burntEnergy();
    }
    this.checkFuel();
  },

  shipMovesLeft: function(){
    if(this.get('localX') > this.get('dimensionBottom')){
      this.set('localX', (this.get('localX') -1));
      this.burntEnergy();
    }
    this.checkFuel();
  },

});
