// Soldier
class Soldier {

  constructor(health, strength){
    this.health=health;
    this.strength=strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health-=damage;
  }
}

// Viking
class Viking extends Soldier {

  constructor(name, health, strength){
    super(health, strength);
    this.name=name;
  }

  receiveDamage(damage){
    this.health-=damage;

    let message;
    if(this.health>0){
      //viking is still alive
      message=`${this.name} has received ${damage} points of damage`;
    }
    else{
      //viking is dead
      message=`${this.name} has died in act of combat`;
    }

    return message;
  }

  battleCry(){
    let bCry = 'Odin Owns You All!';

    return bCry;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health-=damage;

    let message;
    if(this.health>0){
      //saxon is still alive
      message=`A Saxon has received ${damage} points of damage`;
    }
    else{
      //saxon is dead
      message=`A Saxon has died in combat`;
    }

    return message;
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    if(this.saxonArmy===undefined || this.saxonArmy.length===0){
      return "The Saxon army is empty!";
    }
    if(this.vikingArmy===undefined || this.vikingArmy.length===0){
      return "The Viking army is empty!";
    }

    //pick a saxon at random
    let saxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[saxonPosition];
    //pick a viking at random
    let vikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[vikingPosition];

    let message = saxon.receiveDamage(viking.strength);

    if(message==="A Saxon has died in combat"){
      //gotta remove that saxon as they are dead
      this.saxonArmy.splice(saxonPosition, 1);
    }

    return message;
  }

  saxonAttack() {
    if(this.saxonArmy===undefined || this.saxonArmy.length===0){
      return "The Saxon army is empty!";
    }
    if(this.vikingArmy===undefined || this.vikingArmy.length===0){
      return "The Viking army is empty!";
    }

    //pick a saxon at random
    let saxonPosition = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[saxonPosition];
    //pick a viking at random
    let vikingPosition = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[vikingPosition];

    let message = viking.receiveDamage(saxon.strength);

    if(message===`${viking.name} has died in act of combat`){
      //gotta remove the dead viking from the army
      this.vikingArmy.splice(vikingPosition, 1);
    }


    return message;
  }

  showStatus(){
    let status;
    if(this.saxonArmy.length===0){
      status = `Vikings have won the war of the century!`;
    }
    else if(this.vikingArmy.length===0){
      status = `Saxons have fought for their lives and survived another day...`;
    }
    else if(this.saxonArmy.length===1 && this.vikingArmy.length===1){
      status = `Vikings and Saxons are still in the thick of battle.`
    }

    return status;
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
