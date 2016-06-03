// jshint esnext: true
module.exports=Backbone.View.extend({
  initialize: function(){
    //console.log('Change ready!');
    this.model.on('change:localX change:localY  change:energyPosX change:energyPosY change:energyLeft', this.render, this);
    var keymovement = this;
    Mousetrap.bind('up', function(){
      //console.log('up key hit');
      keymovement.movingUp();
    });
    Mousetrap.bind('down', function(){
      //console.log('down key hit');
      keymovement.movingDown();
    });
    Mousetrap.bind('left', function(){
      //console.log('left key hit');
      keymovement.movingLeft();
    });
    Mousetrap.bind('right', function(){
      //console.log('right key hit');
      keymovement.movingRight();
    });
  },

  events:{
    'click #moveup': 'movingUp',
    'click #movedown': 'movingDown',
    'click #moveleft': 'movingLeft',
    'click #moveright': 'movingRight',
    'keypress': 'keyAction'
  },

  template: _.template(document.getElementById('play-game-template').textContent),

  render:function(){

    var htmlTemp = this.template({
      name: this.model.get('name'),
      shipChoice: this.model.get('vehicle'),
      movedX: this.model.get('localX'),
      movedY: this.model.get('localY'),
      starterEnergy: this.model.get('startingTank'),
      energyLeft: this.model.get('energyTank'),
      energyPosX: this.model.get('energyPosX'),
      energyPosY: this.model.get('energyPosY'),
      score: this.model.get('score'),
    });

    this.el.innerHTML = htmlTemp;

    var grid = document.getElementById('galaxyGrid');
      for(var y = 19; y <= 0; y--){
        for(var x = 19; x <= 0; y++){
          var div = document.createElement('div');
            div.setAttribute('id', 'parsec-' + x + '-' + y);
            div.classList.add('parsec');
            grid.appendChild(div);
            console.log('New Div Created');
        }
      }

    //console.log(this.model.get('energyTank'));
    if(this.model.get('energyTank') <= 0){
      // window.alert('You\'re dead in Space without Fuel!');
      Backbone.history.navigate('end', {trigger: true});
      }

    if(this.model.get('localX') === this.model.get('energyPosX') && this.model.get('localY') === this.model.get('energyPosY')){
      //console.log('Refuel Complete');
      this.energyCollect();
    }
    this.model.newPassenger();
    this.model.firstPlayer();
  },

  energyCollect: function(){
    this.model.set('score', this.model.get('score') + 1);
    this.model.RandoEnergyLocal();
  },

  movingUp: function(){
    //console.log('Up Movement Activated');
    if(this.model.get('localY') === this.model.get('dimensionTop')){
    //  alert('You\'ve reached the edge of the galaxy!');
    }
    this.model.shipMovesUp();
  },

  movingDown: function(){
    //console.log('Down Movement Activated');
    if(this.model.get('localY') === this.model.get('dimensionBottom')){
    //  alert('You\'ve reached the edge of the galaxy!');
    }
    this.model.shipMovesDown();
  },

  movingRight: function(){
    //console.log('Right Movement Activated');
    if(this.model.get('localX') === this.model.get('dimensionTop')){
    //  alert('You\'ve reached the edge of the galaxy!');
    }
    this.model.shipMovesRight();
  },

  movingLeft: function(){
    //console.log('Left Movement Activated');
    if(this.model.get('localX') === this.model.get('dimensionBottom')){
    //  alert('You\'ve reached the edge of the galaxy!');
    }
    this.model.shipMovesLeft();
  },

});
