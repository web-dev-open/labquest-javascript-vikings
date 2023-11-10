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

// Iteration No. 1 Testing the code
console.log("\nIteration No. 1 Testing the code");

// Create soldier instances 
const soldier1 = new Soldier(500, 170);
const soldier2 = new Soldier(400, 120);

// Test attack()
console.log(`\nSoldier1 has ${soldier1.attack()} points of attack`); 
console.log(`Soldier2 has ${soldier2.attack()} points of attack`); 

// Test receiveDamage()
soldier1.receiveDamage(48); 
soldier2.receiveDamage(37);

console.log(`\nSoldier1 has ${soldier1.health} points of health`); 
console.log(`Soldier2 has ${soldier2.health} points of health`); 

// Viking
/*

Inheritance
Viking should extend Soldier

class
should receive 3 arguments (name, health & strength)

should receive the name property as its 1st argument

should receive the health property as its 2nd argument

should receive the strength property as its 3rd argument

*/
class Viking extends Soldier {

  // Constructor to take 3 Arguments (name, health, strength)
  constructor(name, health, strength) {

    // Calls the parent constructor
    super(health, strength);

    // Implementation of the new argument
    this.name = name;
  }

  /*
    attack() method
    (This method should be inherited from Soldier, no need to re-implement it.)

        * should be a function
        * should receive 0 arguments
        * should return the strength property of the Viking

  */

  // Inherit attack() from Soldier
  // No need to re-implement 

  /*

  receiveDamage() method
  This method needs to be re-implemented for Viking because the Viking version needs to have different return values.

    * should be a function
    * should receive 1 argument (the damage) 
    * should remove the received damage from the health property
    * if the Viking is still alive, it should return "NAME has received DAMAGE points of damage"
    * if the Viking dies, it should return "NAME has died in act of combat"

  */

  // re-implement receiveDamage
  receiveDamage(damage){

    // Calling the parent 
    super.receiveDamage(damage);

    // Checking if the viking is still alive
    if(this.health > 0) {

      // Let user know the status of the Viking
      return `${this.name} has receive ${damage} points of damage.`;

    } else {

      // Return that Viking has passed away if she or he is not alive.
      return `${this.name} has died in act of combat.`;
    }
  }
  
  /*

  battleCry() method
    * should be a function
    * should receive 0 arguments
    * should return "Odin Owns You All!"

  */

  battleCry() {
    return `Odin Owns You All!!`
  }

}

// Iteration No. 2 Testing the code
console.log("\nIteration No. 2 Testing the code");

// Testing Viking Class
const viking1 = new Viking("Bjorn", 100, 50);
const viking2 = new Viking("Astrid", 150, 80);

// Showing the results
// Testing the receiveDamage method
console.log(viking1.receiveDamage(90));
console.log(viking2.receiveDamage(20));

// Testing battle cry
console.log(viking1.battleCry());

// Testing Attack method
console.log(`${viking2.name} has ${viking2.attack()} points of Strength`);

// Testing the receiveDamage if Viking lost his healt.
console.log(`${viking1.receiveDamage(30)} So sad.`);

console.log("\nIteration No. 3 Saxon Soldier");

// Iteration No. 3 Implementing Saxon Soldier
/*

A Saxon is a weaker kind of Soldier. Unlike a Viking, a Saxon has no name. Their receiveDamage() method will also be different than the original Soldier version.

Modify the Saxon, constructor function, have it inherit from Soldier and re-implement the receiveDamage() method for Saxon.

inheritance
Saxon should extend Soldier
class
You don't have to include constructor method since this class will inherit perfectly from the parents class, both, the health and the strength (it extends Soldier class)

*/

// Saxon
class Saxon extends Soldier{

  // Constructor inherits from Soldier

  /*

    attack() method
    This method should be inherited from Soldier, no need to re-implement it.

      * should be a function
      * should receive 0 arguments
      * should return the strength property of the Saxon

  */

    // Inherit attack() from soldier

    /*

    receiveDamage() method
    This method needs to be re-implemented for Saxon because the Saxon version needs to have different return values.

      * should be a function
      * should receive 1 argument (the damage)
      * should remove the received damage from the health property
      * if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
      * if the Saxon dies, it should return "A Saxon has died in combat"

    */

  // Re implementation fo receiveDamage()
  receiveDamage(damage) {

    // Calliing the parent method
    super.receiveDamage(damage);

    // Checking the health of the Saxon soldier
    if(this.health > 0) {

      // If still alive
      return `A Saxon has received ${damage} points of damage.`;
    
    } else {
      return "A Saxon has died in combat.";
    }
  }

}

console.log('\nTesting the Iteration No. 3 Code');
// Testing receiveDamage() method

const saxon1 = new Saxon(100, 80);
const saxon2 = new Saxon(80, 50);

console.log(`\nSaxon No. 1 has ${saxon1.health} points of Health and ${saxon1.strength} points of Strength`);
console.log(`Saxon No. 2 has ${saxon2.health} points of Health and ${saxon2.strength} points of Strength`);

// Testing receiveDamage re definied method
console.log(`\nSaxon No. 1 ${saxon1.receiveDamage(10)}`);
console.log(`Saxon No. 2 ${saxon2.receiveDamage(90)}`);

// Tesing attack() method.
console.log(`Saxon No. 1 has ${saxon1.attack()} points of health.`);

// War
class War {}

console.log("\n");

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
 