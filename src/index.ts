// CLASSE HERO
class Hero {
  private _name: string;
  private _power: number;
  private _life: number;
  weapon!: Weapon;
  // CONSTRUCTOR DE HERO
  constructor(name: string, power: number, life: number) {
    this._name = name;
    this._power = power;
    this._life = life;
  }

  // METHODE ATTACK + BONUS 1
  attack(opponent: Hero): void {
    if (this.weapon) {
      opponent._life -= this._power + this.weapon.damage;
    } else {
      opponent._life -= this._power;
    }
    
  }

  // METHODE IS ALIVE
  isAlive(): boolean {
    return this._life > 0;
  }

  /* Accesseur (getter) pour la propriété _name.
   Permet d'obtenir la valeur d'une propriété privée.*/
  get name() {
    return this._name;
  }

  /* Mutateur (setter) pour la propriété _name.
   Permet de modifier la valeur d'une propriété privée.*/
  set name(theName: string) {
    this._name = theName;
  }

  // Accesseur (getter) pour la propriété _power.
  get power() {
    return this._power;
  }

  // Mutateur (setter) pour la propriété _power.
  set power(thePower: number) {
    this._power = thePower;
  }

  // Accesseur (getter) pour la propriété _life.
  get life() {
    return this._life;
  }

  // Mutateur (setter) pour la propriété _life.
  set life(theLife: number) {
    this._life = theLife;
  }
  
}
// Crée deux instances de Hero et vérifie que les méthodes attack et isAlive fonctionnent.
const hero1 = new Hero("AXL ROSE", 20, 200);
const hero2 = new Hero("KURT COBAIN", 35, 200);

function bastonSansArme(): void {
  while (hero1.isAlive() && hero2.isAlive()) {
    //  console.log(`Avant la baston - ${hero1.name} a ${hero1.life} pt de vie et ${hero2.name} a ${hero2.life} Pt de vie.`);
    hero1.attack(hero2);
    hero2.attack(hero1);
    //  console.log(`Après la baston - ${hero1.name} a ${hero1.life} pt de vie et ${hero2.name} a ${hero2.life} Pt de vie`);
  }
  if (!hero1.isAlive && !hero2.isAlive) {
    console.log("[BASTON SANS ARME] MATCH NUL");
  } else if (hero1.isAlive() && !hero2.isAlive()) {
    console.log(
      `[BASTON SANS ARME] ${hero1.name} A GAGNE! il lui reste ${hero1.life} pt de vie et ${hero2.name} a ${hero2.life} Pt de vie`
    );
  } else if (hero2.isAlive()) {
    console.log(
      `[BASTON SANS ARME] ${hero2.name} A GAGNE! il lui reste ${hero2.life} pt de vie et ${hero1.name} a ${hero1.life} Pt de vie`
    );
  }
}
bastonSansArme();
//JE CREE UNE CLASSE WEAPON
class Weapon {
  name: string;
  damage: number; // BONUS 1: AJOUT DE LA PROPRIETE DAMAGE
  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}
// JE CREE LES 3 CLASSES QUI HERITE DE HERO
class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number, weapon: string) {
    super(name, power, life); // Appel du constructeur de la classe hero
    this.weapon = new Weapon("Hache", 11); // Initialisation de l'attribut weapon hérité de la classe Hero
  }
  // Redéfinition de la méthode attack pour le cas spécifique de HeroAxe
  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      this.power *= 2; // Multiplier power par deux
    }
    super.attack(opponent); // Appel de la méthode attack de la classe parente
  }
}

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number, weapon: string) {
    super(name, power, life); // Appel du constructeur de la classe hero
    this.weapon = new Weapon("Epée", 12); // Initialisation de l'attribut weapon hérité de la classe Hero
  }
  // Redéfinition de la méthode attack pour le cas spécifique de HeroAxe
  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      this.power *= 2; // Multiplier power par deux
    }
    super.attack(opponent); // Appel de la méthode attack de la classe parente
  }
}
class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number, weapon: string) {
    super(name, power, life); // Appel du constructeur de la classe hero
    this.weapon = new Weapon("lance", 15); // Initialisation de l'attribut weapon hérité de la classe Hero
  }
  // Redéfinition de la méthode attack pour le cas spécifique de HeroAxe
  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      this.power *= 2; // Multiplier power par deux
    }
    super.attack(opponent); // Appel de la méthode attack de la classe parente
  }
}
/* Crée des instances des trois classes HeroAxe, HeroSword et HeroSpear et 
vérifie que leurs méthodes attack fonctionnent correctement.*/

const heroAxe = new HeroAxe("AXL ROSE", 20, 200, "axe");
const heroSword = new HeroSword("JAMES HETFIELD", 15, 200, "sword");
const heroSpear = new HeroSpear("BRUCE DICKINSON", 35, 200, "spear");

/*console.log(`Avant la baston - ${heroAxe.name} avec l'arme ${heroAxe.weapon} a ${heroAxe.life} pt de vie / ${heroAxe.power} de pouvoir et ${heroSword.name} a ${heroSword.life} Pt de vie / ${heroSword.power} de Pouvoir.`);
 heroAxe.attack(heroSword);
 console.log(`Après la baston - ${heroAxe.name} avec l'arme ${heroAxe.weapon} a  pt de vie / ${heroAxe.power} de pouvoir et ${heroSword.name} a ${heroSword.life} Pt de vie / ${heroSword.power} de Pouvoir.`);
 heroSword.attack(heroSpear);
 console.log(`Après la baston - ${heroSpear.name} avec l'arme ${heroSpear.weapon} a ${heroSpear.life} pt de vie / ${heroSpear.power} de pouvoir et ${heroSword.name} a ${heroSword.life} Pt de vie / ${heroSword.power} de Pouvoir.`);*/

// BONUS je crée une variable qui affichera les Rounds
let round: number = 0;
/*je crée un fonction qui contient une boucle qui fait que deux instances de sous-classes Hero 
s'affrontent (elles attaquent en même temps).*/
function bastonAvecArme(): void {
  while (heroAxe.isAlive() && heroSpear.isAlive()) {
    heroAxe.attack(heroSpear);
    heroSpear.attack(heroAxe);
    round++; // petit bonus pour afficher les ROUNDS
    console.log(
      `[BASTON AVEC ARME] ROUND ${round}:  ${heroAxe.name} [Arme: ${heroAxe.weapon.name} / Vie: ${heroAxe.life} / Pouvoir: ${heroAxe.power}] et ${heroSpear.name} [Arme: ${heroSpear.weapon.name} / Vie: ${heroSpear.life} / Pouvoir: ${heroSpear.power}]`
    );
  }
  if (!heroAxe.isAlive() && !heroSpear.isAlive) {
    console.log(
      `[BASTON AVEC ARME] MATCH NUL entre ${heroSpear.name} et ${heroAxe.name}`
    );
  } else if (!heroSpear.isAlive()) {
    console.log(
      `[BASTON AVEC ARME] Bien ouej ${heroAxe.name} t'as buté ${heroSpear.name} avec l'arme ${heroAxe.weapon.name}`
    );
  } else if (!heroAxe.isAlive()) {
    console.log(
      `[BASTON AVEC ARME] Bien ouej  ${heroSpear.name} t'as buté ce tarba d' ${heroAxe.name} avec l'arme ${heroSpear.weapon.name}`
    );
  }
}
bastonAvecArme();
