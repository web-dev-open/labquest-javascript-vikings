// Soldier
class Soldier {
  constructor(health, strength) {
    this.health=health;
    this.strength=strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health = this.health-damage;
  }
}

// Viking
class Viking extends Solider{
  constructor(name,health, strength) {
    super(health,strength);
    this.name=name;
  }
  
  receiveDamage(damage){
    this.health-=damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`; 
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
 battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Solider{
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  performAttack(attackerArmy, targetArmy) {
    const randomTargetIndex = Math.floor(Math.random() * targetArmy.length);
    const randomTarget = targetArmy[randomTargetIndex];

    const randomAttackerIndex = Math.floor(Math.random() * attackerArmy.length);
    const randomAttacker = attackerArmy[randomAttackerIndex];

    const result = randomTarget.receiveDamage(randomAttacker.strength);

    if(randomTarget.health <= 0) {
      targetArmy.splice(randomTargetIndex, 1);
    }

    return result;
  }

  vikingAttack() {
    return this.performAttack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    return this.performAttack(this.saxonArmy, this.vikingArmy);
  }

  showStatus() {
    if(this.saxonArmy.length === 0)
      return "Vikings have won the war of the century!";
    else if(this.vikingArmy.length === 0)
      return "Saxons have fought for their lives and survived another day...";
    else
      return "Vikings and Saxons are still in the thick of battle.";
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
