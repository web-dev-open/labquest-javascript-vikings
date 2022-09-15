// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
   return this.strength;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength) {
    super(health,strength);
    this.name = name;
    // this.health = health;
    // this.strength = strength;
  }
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    //random
    let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    let damagedSaxon = randomSaxon.receiveDamage(randomViking.attack());
    //console.log(randomSaxonIndex);

    if (randomSaxon.health < 0 ) {
      this.saxonArmy.splice(randomSaxonIndex,1);
    }
    return damagedSaxon;
  }

  saxonAttack(){
     //random
     let randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
     let randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
     let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
     let damagedViking = randomViking.receiveDamage(randomSaxon.attack());
     //console.log(randomSaxonIndex);
 
     if (randomViking.health < 0 ) {
       this.vikingArmy.splice(randomVikingIndex,1);
     }
     return damagedViking;
  }
  showStatus(){
    if (this.saxonArmy.length !=0 && this.vikingArmy.length !=0 ) {
      return "Vikings and Saxons are still in the thick of battle."
    }
    else if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!"
    }
    else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day..."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
