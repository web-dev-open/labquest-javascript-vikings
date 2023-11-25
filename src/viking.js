// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
 
  }
  attack(){
    return this.strength;
  }
       receiveDamage(damage){
    this.health -= damage;
  }
}

     

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    super.receiveDamage(damage);

    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }
    else{
      return `${this.name} has died in act of combat`;
    }
  }

  attack(){
    return this.strength;
  }

  battleCry(){
    return "Odin Owns You All!";
  }
}



// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }
  receiveDamage(damage){
    super.receiveDamage(damage);

    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }
    else{
      return `A Saxon has died in combat`;
    }
  }

  attack(){
    return this.strength;
  }
}

// War
class War {
  constructor(){
    this.VikingArmy = [];
    this.SaxonArmy = [];
  }
  addViking(Viking){
    this.VikingArmy.push(Viking);
    return this.vikingArmy;
  }

  addSaxon(Saxon){
    this.SaxonArmy.push(Saxon);
    return this.saxonArmy;
  }

  vikingAttack(){
    let randomSaxon = Math.floor(Math.random() * this.SaxonArmy.length);
    let randomViking = this.VikingArmy[Math.floor(Math.random() * this.VikingArmy.length)];

    let result = this.SaxonArmy[randomSaxon];

    const damage = randomViking.strength;
    const result2 = result.receiveDamage(damage);

    if(this.SaxonArmy[randomSaxon].health <= 0){
      this.SaxonArmy.splice(randomSaxon, 1);
    }
    return result2;
  }
  saxonAttack(){
    let randomSaxon = Math.floor(Math.random() * this.SaxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.VikingArmy.length);

    let result2 = this.VikingArmy[randomViking].receiveDamage(this.SaxonArmy[randomSaxon].strength);

    if(this.VikingArmy[randomViking].health <= 0){
      this.VikingArmy.splice(randomViking, 1);
    }
    return result2;
  }

  showStatus(){
    if(this.SaxonArmy.length === 0){
      return "Vikings have won the war of the century!";
    }
    else if(this.VikingArmy.length === 0){
      return "Saxons have fought for their lives and survived another day...";
    }
    else{
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
