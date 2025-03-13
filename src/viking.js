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
    console.log(this.health);
  }
}

let soldier1 = new Soldier(100, 60);
console.log(soldier1.attack());
console.log(soldier1.receiveDamage(30));

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

let Viking1 = new Viking('Eyob', 100, 60);
console.log(Viking1.attack());
console.log(Viking1.receiveDamage(10));
console.log(Viking1.battleCry());

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}
const Saxon1 = new Saxon(100, 60);
console.log(Saxon1.attack());
console.log(Saxon1.receiveDamage(100));

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
    if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0)
      return 'No more enemies to attack!';

    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let result = randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy = this.saxonArmy.filter((saxon) => saxon.health > 0);
    }

    return result;
  }

  saxonAttack() {
    if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0)
      return 'No more enemies to attack!';

    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    let result = randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy = this.vikingArmy.filter((viking) => viking.health > 0);
    }

    return result;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought bravely and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

let war = new War();
let viking1 = new Viking('Ragnar', 100, 50);
let viking2 = new Viking('Lagertha', 90, 45);
let saxon1 = new Saxon(60, 40);
let saxon2 = new Saxon(50, 35);

war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
