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
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
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
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health !== 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
//check if we still have soldiers/saxons
    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
      return "No more soldiers to attack";
    }

    // selcting a random viking and a random Saxon
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];


    // saxon receives damage equal to the strength of the Viking
    const result = randomSaxon.receiveDamage(randomViking.strength);

    // this will remove the Saxon from the army if they die
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
      return "A Saxon has died in combat"
    }

    return result;
  }



  saxonAttack() {
    //check if we still have soldiers/saxons
    if (this.vikingArmy.length === 0 || this.saxonArmy.length === 0) {
      return "No more soldiers to attack";
    }

    // selcting a random viking and a random Saxon
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[randomVikingIndex];


    // viking receives damage equal to the strength of the Saxon
    const result = randomViking.receiveDamage(randomSaxon.strength);

    // this will remove the Viking from the army if they die
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
      
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
      return "Saxons have fought for their lives and survived another day...";
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
