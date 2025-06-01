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
      return `${this.name.toUpperCase()} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name.toUpperCase()} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in act of combat`;
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
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    const saxon = this.saxonArmy[randomSaxonIndex];
    const viking = this.vikingArmy[randomVikingIndex];

    const result = saxon.receiveDamage(viking.strength);

    this.saxonArmy = this.saxonArmy.filter((s) => s.health > 0);

    return result;
  }

  saxonAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );

    const saxon = this.saxonArmy[randomSaxonIndex];
    const viking = this.vikingArmy[randomVikingIndex];

    const result = viking.receiveDamage(saxon.strength);

    this.vikingArmy = this.vikingArmy.filter((v) => v.health > 0);

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

// Create Vikings and Saxons
const viking1 = new Viking('Ragnar', 100, 30);
const viking2 = new Viking('Lagertha', 80, 25);

const saxon1 = new Saxon(60, 20);
const saxon2 = new Saxon(50, 15);

// Create a war instance
const war = new War();

// Add Vikings and Saxons to their armies
war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);

// Simulate attacks
console.log('Viking attacks:');
console.log(war.vikingAttack());

console.log('Saxon attacks:');
console.log(war.saxonAttack());

console.log('War Status:');
console.log(war.showStatus());
