// Soldier
class Soldier {
 
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
    
    
    attack(){
      return this.strength;
    }

    receiveDamage(damage){
      this.health -= damage;
      if(this.health < 0){
        this.health = 0;
      }

    }
}

const soldier = new Soldier(100, 20);

console.log("Initial Health:", soldier.health); // Output: 100
console.log("Initial Strength:", soldier.strength); // Output: 20

const damageReceived = 30;
soldier.receiveDamage(damageReceived);
console.log("Health after receiving damage:", soldier.health); // Output: 70

const attackStrength = soldier.attack();
console.log("Attack Strength:", attackStrength);






// Viking
class Viking extends Soldier{
  constructor(name, health,strength){
    super(health, strength);
    this.name = name;
  }
  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
    if(this.health < 0){
      return `${this.name} has received ${damage} points of damage`;
    }
    else{
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }

}
const viking = new Viking("Ragnar", 150, 30);

console.log("Viking's Name:", viking.name); 
console.log("Initial Health:", viking.health); 
console.log("Initial Strength:", viking.strength); 

const damage = 50;
const damageMessage = viking.receiveDamage(damage);
console.log(damageMessage); 

console.log("Health after receiving damage:", viking.health);

const battleCryMessage = viking.battleCry();
console.log(battleCryMessage);






// Saxon
class Saxon extends Soldier {
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health < 0){
      return 'A Saxon has received ${damage} points of damage';
    }
    else{
      return 'A Saxon has died in act of combat';
    }
  }
}

const saxon = new Saxon(100, 15);

console.log("Initial Health:", saxon.health);
console.log("Initial Strength:", saxon.strength); 

const damage1 = 30;
const damageMessage1 = saxon.receiveDamage(damage1);
console.log(damageMessage1); 

console.log("Health after receiving damage:", saxon.health);







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

  getRandomSoldier(army) {
    return army[Math.floor(Math.random() * army.length)];
  }

  attack(attacker, defender) {
    const damage = attacker.attack();
    const result = defender.receiveDamage(damage);

    if (defender.health <= 0) {
      const index = this[defender instanceof Viking ? 'saxonArmy' : 'vikingArmy'].indexOf(defender);
      this[defender instanceof Viking ? 'saxonArmy' : 'vikingArmy'].splice(index, 1);
    }

    return result;
  }

  vikingAttack() {
    const randomViking = this.getRandomSoldier(this.vikingArmy);
    const randomSaxon = this.getRandomSoldier(this.saxonArmy);
    return this.attack(randomViking, randomSaxon);
  }

  saxonAttack() {
    const randomViking = this.getRandomSoldier(this.vikingArmy);
    const randomSaxon = this.getRandomSoldier(this.saxonArmy);
    return this.attack(randomSaxon, randomViking);
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

// Example usage:
const war = new War();

war.addViking(new Viking("Ragnar", 150, 30));
war.addViking(new Viking("Bjorn", 120, 25));

war.addSaxon(new Saxon(100, 15));
war.addSaxon(new Saxon(80, 20));

console.log(war.showStatus());

war.vikingAttack();
console.log(war.showStatus());

war.saxonAttack();
console.log(war.showStatus());

war.vikingAttack();
console.log(war.showStatus());

war.vikingAttack();
console.log(war.showStatus());



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
