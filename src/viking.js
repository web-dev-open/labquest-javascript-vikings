// Soldier
class Soldier {

  // Add the constructor and this
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  // Adding atack() method
  attack() {

    // Returns the strignt property
    return this.strength;

  }

  // Adding receiveDamage() method
  receiveDamage(damage) {

    // Substracting the damage from healt
    this.health -= damage;
  }

}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
