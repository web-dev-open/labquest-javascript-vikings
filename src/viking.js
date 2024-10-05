// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  recieveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  recieveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has recieved ${damage} points of damage`;
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
  recieveDamage(damage) {
    this.health -= damage;
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
    this.VikingArmy = [];
    this.SaxonArmy = [];
  }

  addViking(viking) {
    this.VikingArmy.push(viking);
  }

  addSaxon(Saxon) {
    this.SaxonArmy.push(Saxon);
  }

  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const result = this.saxonArmy[randomSaxonIndex].receiveDamage(randomViking.strength);

    if (this.saxonArmy[randomSaxonIndex].health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
}

saxonAttack() {
    const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const result = this.vikingArmy[randomVikingIndex].receiveDamage(randomSaxon.strength);

    if (this.vikingArmy[randomVikingIndex].health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
}

showStatus() {
    if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
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
