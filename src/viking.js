// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

let solidier1 = new Soldier(100,20);

let attackStrength = solidier1.attack();
console.log(`Attack Stength: ${attackStrength}`);

solidier1.receiveDamage(10);
console.log(`Updated Health: ${solidier1.health}`);



// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}

let viking1 = new Viking("Ragnar", 120, 25);

let attackStrength1 = viking1.attack();
console.log(`${viking1.name}'s Attack Strength: ${attackStrength1}`);

let damageResult = viking1.receiveDamage(30);
console.log(damageResult);


let battleCryMessage = viking1.battleCry();
console.log(`${viking1.name}'s Battle Cry: ${battleCryMessage}`);




// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

let saxon1 = new Saxon(80, 15);

let attackStrength2=saxon1.attack();
console.log(`Saxon's Attack Strength: ${attackStrength2}`);

let damageResult2=saxon1.receiveDamage(20);
console.log(damageResult2)



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
   attack(attackerArray, defenderArray) {
        const randomAttackerIndex = Math.floor(Math.random() * attackerArray.length);
        const randomDefenderIndex = Math.floor(Math.random() * defenderArray.length);
        const randomAttacker = attackerArray[randomAttackerIndex];
        const randomDefender = defenderArray[randomDefenderIndex];

        const damageResult = randomDefender.receiveDamage(randomAttacker.strength);

        // Remove dead soldiers from the army
        if (randomDefender.health <= 0) {
            defenderArray.splice(randomDefenderIndex, 1);
        }

        return damageResult;
    }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
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

let war = new War();
war.addViking(new Viking("Ragnar", 120,25));
war.addSaxon(new Saxon(80, 15));

console.log(war.vikingAttack());
console.log(war.saxonAttack());
console.log(war.showStatus());



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
