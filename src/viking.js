// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(health, strength, name) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);

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
class Saxon {

  receiveDamage(damage) {
    //super.receiveDamage(damage);

    if (this.health > 0) {
      return 'A Saxon has received DAMAGE points of damage';
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {

    let randomSaxonNumber = Math.floor(Math.random * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonNumber];

    let randomVikingNumber = Math.floor(Math.random * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingNumber];

    let result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonNumber, 1);
    }
    return result;

  }
  saxonAttack() {
    
    let randomSaxonNumber = Math.floor(Math.random() * this.saxonArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonNumber];

    let randomVikingNumber = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingNumber];

    let result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingNumber, 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';

    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';

    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
