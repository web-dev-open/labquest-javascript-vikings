// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health; // Set health from the argument
    this.strength = strength; // Set strength from the argument
}

// attack() method that returns the strength
attack() {
    return this.strength;
}

// receiveDamage() method that subtracts damage from health
receiveDamage(damage) {
    this.health -= damage; // Subtract damage from the health
}
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength); // Call the Soldier constructor with health and strength
    this.name = name; // Set the name specific to Viking
}

// Re-implement receiveDamage method
receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;
    }
}

// battleCry method
battleCry() {
    return "Odin Owns You All!";
}
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`;
    }
}
}
// War
class War {
  constructor() {
    this.vikingArmy = []; // Initializes an empty Viking army
    this.saxonArmy = [];  // Initializes an empty Saxon army
}

// Add Viking to the army
addViking(viking) {
    this.vikingArmy.push(viking);
}

// Add Saxon to the army
addSaxon(saxon) {
    this.saxonArmy.push(saxon);
}
attack(attackingArmy, defendingArmy) {
  const attacker = attackingArmy[Math.floor(Math.random() * attackingArmy.length)];
  const defender = defendingArmy[Math.floor(Math.random() * defendingArmy.length)];

  const result = defender.receiveDamage(attacker.strength);

  // Remove dead defender from the army
  if (defender.health <= 0) {
      defendingArmy.splice(defendingArmy.indexOf(defender), 1);
  }

  return result;
}

// Viking attack on Saxon
vikingAttack() {
  return this.attack(this.vikingArmy, this.saxonArmy);
}

// Saxon attack: Saxons attack Vikings
saxonAttack() {
  return this.attack(this.saxonArmy, this.vikingArmy);
}

// Show the current status of the battle
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
