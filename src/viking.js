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

// Iteration No 4. War!
console.log("\nIteration No. 4. War!");

/*

Now we get to the good stuff: WAR! Our War class will allow us to have a Viking army and a Saxon army that battle each other.

Modify the War class and add 5 methods to its class:

addViking()

addSaxon()

vikingAttack()

saxonAttack()

showStatus()

class
When we first create a War, the armies should be empty. We will add soldiers to the armies later.

should receive 0 arguments

should assign an empty array to the vikingArmy property

should assign an empty array to the saxonArmy property

*/

// Creating the class
class War {
  
  // Initializes empty arrays with constructor for both armies
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  /*

  addViking() method
  Adds 1 Viking to the vikingArmy. If you want a 10 Viking army, you need to call this 10 times.

    * should be a function
    * should receive 1 argument (a Viking object)
    * should add the received Viking to the army
    * shouldn't return anything

  */

  // Adding viking objetc to the viking array
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  /*

  addSaxon() method
  The Saxon version of addViking().
    * should be a function
    * should receive 1 argument (a Saxon object)
    * should add the received Saxon to the army
    * shouldn't return anything

  */

  // Adding saxon object to the saxon array
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  /*

  vikingAttack() method
  A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.
    * should be a function
    * should receive 0 arguments
    * should make a Saxon receiveDamage() equal to the strength of a Viking
    * should remove dead saxons from the army
    * should return result of calling receiveDamage() of a Saxon with the strength of a Viking

  */

  saxonAttack() {

    // Gettomg a random Saxon
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // Getting randon viking
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // Saxon receices damage equivalent to the viking strngth
    const result = saxon.receiveDamage(viking.strength);

    // Remove the defeated Saxon from Army
    if(saxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    }

    // returning the result
    return result;
  }

  /*

  vikingAttack() method
  A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.
    * should be a function
    * should receive 0 arguments
    * should make a Saxon receiveDamage() equal to the strength of a Viking
    * should remove dead saxons from the army
    * should return result of calling receiveDamage() of a Saxon with the strength of a Viking

  */

  vikingAttack() {

    // Getting a random viking
    const viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    // Getting a random saxon
    const saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // Viking receices damage in the same proportion of saxon strength
    const result =  viking.receiveDamage(saxon.strength);

    // remove defeated vikings from the army
    if(viking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
    }

    // Return the result
    return result;
  }

  // Show the end of the war.
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return `Vikings have won the war of the Century`;
    
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    
    } else {
      return `Vikings and Saxons are still in the thick of battle`;
    }
  }

}

// Testing the Code of Iteration No 4.
console.log("Testing of Iteratin No. 4 War!!");

// Creating the instanmces
const war = new War();

// Adding Vikings to the Viking Army
war.addViking(new Viking("Erik, 100, 50"));
war.addViking(new Viking("Bjorn, 80, 40"));
war.addViking(new Viking("Astrid, 120, 80"));

// Adding Saxons to the saxon Army
war.addSaxon(new Saxon("Aethelwulf", 50, 30));
war.addSaxon(new Saxon("Alfred", 75, 35));
war.addSaxon(new Saxon("Ecgberht", 60, 30));
war.addSaxon(new Saxon("Eadgifu", 55, 40));
war.addSaxon(new Saxon("Mildred", 65, 65));

// Perform some Attacks
console.log(`Result of the Viking attack ${war.vikingAttack()}`);
console.log(`Result of Saxon's attack ${war.saxonAttack()}`);

// Show the status of the War
console.log("War status: ", war.showStatus());

// Iteration No. 5
console.log("\n Iteration No. 5 WAR!!!");

class War2 {

  // Creatomg the arrays in the constructor
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = []; 
  }

  // Adding the viking object to the array.
  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  // adding the saxon object to the array.
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  // Refactor code - with a  generic attack method
  attack(attackers, defenders) {

    // Creating the attackers and Defenders with the same logic
    const attacker = attackers[Math.floor(Math.random() * attackers.length)];
    const defender = defenders[Math.floor(Math.random() * defenders.length)];
    const result = defender.receiveDamage(attacker.strength);
    
    // Removed the defeated ones (vikings or saxons)
    if (defender.health <= 0) {
      defenders.splice(defenders.indexOf(defender), 1);
    }

    return result;
  }

  // Vikings attack Saxons
  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);
  }

  // Saxons attack Vikings
  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);
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

// Test of Iteration No. 5
console.log("\nTest of the Iteration No. 5");

// Creating the instanmces
const war2 = new War2();

// Adding Vikings to the Viking Army
war2.addViking(new Viking("Erik, 100, 50"));
war2.addViking(new Viking("Bjorn, 80, 40"));
war2.addViking(new Viking("Astrid, 120, 80"));

// Adding Saxons to the saxon Army
war2.addSaxon(new Saxon("Aethelwulf", 50, 30));
war2.addSaxon(new Saxon("Alfred", 75, 35));
war2.addSaxon(new Saxon("Ecgberht", 60, 30));
war2.addSaxon(new Saxon("Eadgifu", 55, 40));
war2.addSaxon(new Saxon("Mildred", 65, 65));

// Perform some Attacks
console.log(`Result of the Viking attack ${war2.vikingAttack()}`);
console.log(`Result of Saxon's attack ${war2.saxonAttack()}`);

// Show the status of the War
console.log("War status: ", war2.showStatus());


console.log("\n");

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
