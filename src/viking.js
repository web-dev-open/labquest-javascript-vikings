// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  };

  attack(){
    return `${this.strength}`;
  };

  receiveDamage(damage){
    this.health -= damage;


  }
}

// Viking
class Viking extends Soldier {
  
  constructor(name, health, strength){
    this.name = name;
    super(health, strength);
  };

  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `${this.name} has received DAMAGE points of damage`;
    }
    else{
      return `${this.name} has died in act of combat`;
    }

  };

  battleCry(){
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;

    if(this.health > 0){
      return 'A Saxon has received DAMAGE points of damage';
    }
    else{
      'A Saxon has died in combat';
    }
  };
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  addViking(vikingObject){
    this.vikingArmy.push(vikingObject);

  };
  addSaxon(saxonObject){
    this.saxonArmy.push(saxonObject);
  };
  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];

    const result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];

    const result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  };

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
