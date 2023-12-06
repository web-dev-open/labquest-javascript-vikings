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
    super.receiveDamage(damage);
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : "A Saxon has died in combat";
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
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];

    const damage = viking.attack();
    const result = saxon.receiveDamage(damage);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }

    return result;
  }

  saxonAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const viking = this.vikingArmy[vikingIndex];
    const saxon = this.saxonArmy[saxonIndex];

    const damage = saxon.attack();
    const result = viking.receiveDamage(damage);

    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
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
