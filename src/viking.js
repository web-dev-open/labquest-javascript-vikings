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
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
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

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const vikings = Math.floor(Math.random() * this.vikingArmy.length);
    const saxons = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingActive = this.vikingArmy[vikings];
    const saxonActive = this.saxonArmy[saxons];

    const damage = saxonActive.receiveDamage(vikingActive.strength);

    if (saxonActive.health <= 0) {
      let positionSaxon = this.saxonArmy.indexOf(saxonActive);
      this.saxonArmy.splice(positionSaxon, 1);
    }

    return damage;
  }

  saxonAttack() {
    const vikings = Math.floor(Math.random() * this.vikingArmy.length);
    const saxons = Math.floor(Math.random() * this.saxonArmy.length);

    const vikingActive = this.vikingArmy[vikings];
    const saxonActive = this.saxonArmy[saxons];

    const damage = vikingActive.receiveDamage(saxonActive.strength);

    if (vikingActive.health <= 0) {
      let positionViking = this.vikingArmy.indexOf(vikingActive);
      this.vikingArmy.splice(positionViking, 1);
    }

    return damage;
  }

  // attack(attackerArmy, defenderArmy) {
  //   const attackers = Math.floor(Math.random() * attackerArmy.length);
  //   const defenders = Math.floor(Math.random() * defenderArmy);

  //   const attackerActive = attackerArmy[attackers]
  //   const defenderActive = defenderArmy[defenders]

  //   const damage = defenderActive.receiveDamage(attackerActive.strength)

  //   if (defenderActive <= 0) {
  //     defenderArmy.splice(defenders, 1)
  //   }
  //   return damage
  // }

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
