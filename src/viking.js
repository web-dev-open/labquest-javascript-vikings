// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0)
      return this.name + " has received "+ damage +" points of damage";
    else
      return this.name + " has died in act of combat";
  }
  battleCry(){
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0)
      return "A Saxon has received "+ damage +" points of damage";
    else
      return "A Saxon has died in combat";
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
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    var rSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var rViking = Math.floor(Math.random() * this.vikingArmy.length);
    var res = this.saxonArmy[rSaxon].receiveDamage(this.vikingArmy[rViking].attack());
    this.saxonArmy = this.saxonArmy.filter(saxon.health > 0);
    return res;
  }
  saxonAttack(){
    var rSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var rViking = Math.floor(Math.random() * this.vikingArmy.length);
    var res = this.vikingArmy[rViking].receiveDamage(this.saxonArmy[rSaxon].attack());
    this.vikingArmy = this.vikingArmy.filter(viking.health > 0);
    return res;
  }
  showStatus(){
    if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0)
      return "Vikings and Saxons are still in the thick of battle.";
    else if(this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    else
      return "Saxons have fought for their lives and survived another day...";
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
