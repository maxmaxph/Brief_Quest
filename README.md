
# Consignes #

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1
==========
### 1-1 Quels sont les différents type primitives de données en TypeScript ? 
----------------------------------------------------------------------------
 
En TypeScript, les types primitifs de données incluent les types suivants :  

**number** : représente les nombres, qu'ils soient entiers ou à virgule flottante.  
**string** : représente une séquence de caractères. Les chaînes de caractères peuvent être entourées de guillemets simples (') ou de guillemets doubles (").  
**boolean** : représente une valeur logique et peut être soit true (vrai) soit false (faux).  
**null** : représente l'absence de valeur intentionnelle. C'est un type qui ne peut avoir qu'une seule valeur : null.  
**undefined** : représente l'absence de valeur non intentionnelle. C'est un type qui ne peut avoir qu'une seule valeur : undefined.  
**symbol** : représente un type symbolique, souvent utilisé comme identifiant unique.  
**bigint** : représente des entiers de taille arbitraire.  
En plus de ces types primitifs, TypeScript propose également des types plus avancés tels que les tableaux, les tuples, les énumérations, les objets, les unions, les intersections, etc.  Ces types permettent de décrire des structures de données plus complexes et d'améliorer la sécurité du typage dans le code TypeScript.
**void**
### 1-2 Comment typer un tableau ?
----------------------------------

```
// Syntaxe pour typer un tableau
let tableau: type[];

// Exemple d'un tableau de nombres
let nombres: number[] = [1, 2, 3, 4, 5];

// Exemple d'un tableau de chaînes de caractères
let mots: string[] = ["Bonjour", "Monde"];

// Exemple d'un tableau mixte de nombres et de chaînes de caractères
let mixte: (number | string)[] = [1, "deux", 3, "quatre"];
```

### 1-3 Quel est le type `any` ?
--------------------------------

En TypeScript, le type any est utilisé pour indiquer qu'une variable peut prendre n'importe quelle valeur. Lorsqu'une variable est typée comme any, cela signifie qu'elle est délibérément exclue du système de typage fort de TypeScript. Cela permet de contourner les vérifications de type lors de la compilation et d'utiliser des valeurs de différents types sans générer d'erreurs de type.

Voici un exemple d'utilisation du type any :
```
let variable: any;

variable = 10; // La variable peut contenir un nombre
variable = "Bonjour"; // La variable peut aussi contenir une chaîne de caractères
variable = true; // La variable peut même contenir une valeur booléenne

```
Comme illustré dans l'exemple, une variable typée comme any peut être réassignée avec n'importe quelle valeur, quels que soient son type ou sa structure. Cependant, l'utilisation excessive du type any peut réduire la sécurité du typage statique offerte par TypeScript, car le compilateur ne peut pas effectuer de vérifications de type sur ces variables.

Il est généralement recommandé d'éviter autant que possible l'utilisation du type any et de privilégier une utilisation plus précise des types spécifiques pour bénéficier des avantages de la vérification de type statique. L'utilisation appropriée des types spécifiques permet de détecter les erreurs potentielles lors de la compilation et facilite la maintenance du code à long terme.

### 1-4 Comment typer le retour d'une fonction ainsi que le type de ses paramètres ? 
------------------------------------------------------------------------------------

En TypeScript, il est possible de typer le retour d'une fonction ainsi que les types de ses paramètres en utilisant la syntaxe de notation des types. Voici comment procéder :  

Typage du retour de la fonction :
Pour spécifier le type de retour d'une fonction, vous pouvez utiliser le caractère deux-points (:) suivi du type souhaité. Voici un exemple :
```
function addition(a: number, b: number): number {
  return a + b;
}

```
Dans cet exemple, la fonction addition prend deux paramètres de type number (a et b) et renvoie une valeur de type number.

Typage des paramètres de la fonction :
Pour typer les paramètres d'une fonction, vous pouvez spécifier le nom du paramètre suivi d'un deux-points (:) et du type correspondant. Voici un exemple :
```
function afficherMessage(nom: string, age: number): void {
  console.log(`Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`);
}

```
Dans cet exemple, la fonction afficherMessage prend deux paramètres : nom de type string et age de type number. La fonction ne renvoie rien, d'où l'utilisation du type void.  

Il est important de noter que le typage des paramètres et du retour d'une fonction est optionnel en TypeScript. Le compilateur TypeScript est capable d'inférer les types à partir du contexte dans de nombreux cas. Cependant, spécifier explicitement les types de paramètres et de retour peut améliorer la lisibilité du code et permettre au compilateur de détecter les erreurs potentielles plus tôt.  

De plus, TypeScript offre d'autres fonctionnalités avancées pour typer les fonctions, comme les types d'union, les types génériques, les fonctions avec des paramètres optionnels ou des paramètres par défaut, etc. Ces fonctionnalités permettent de décrire plus précisément les contrats et les comportements des fonctions.  


**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2
==========
### 2-1 Qu'est ce qu'une classe ?
---------------------------------
En TypeScript, une classe est une structure qui permet de définir des objets et leurs comportements. Elle sert de modèle pour la création d'instances d'objets ayant des propriétés et des méthodes communes. Les classes sont un concept fondamental de la programmation orientée objet (POO).  
```
class Voiture {
  marque: string;
  annee: number;

  constructor(marque: string, annee: number) {
    this.marque = marque;
    this.annee = annee;
  }

  demarrer(): void {
    console.log(`La voiture ${this.marque} démarre !`);
  }

  arreter(): void {
    console.log(`La voiture ${this.marque} s'arrête !`);
  }
}

```
Dans cet exemple, nous avons défini une classe Voiture avec deux propriétés : marque de type string et annee de type number. Le constructeur de la classe est utilisé pour initialiser les propriétés lorsqu'une nouvelle instance de la classe est créée.

La classe Voiture possède également deux méthodes : demarrer() et arreter(). Ces méthodes sont des fonctions qui peuvent être appelées sur une instance de la classe Voiture pour effectuer des actions spécifiques.

Pour créer une instance d'une classe, on utilise le mot-clé new suivi du nom de la classe, suivi éventuellement des arguments nécessaires pour le constructeur. Voici un exemple :  
```
const maVoiture = new Voiture("Toyota", 2021);
maVoiture.demarrer(); // Affiche "La voiture Toyota démarre !"
maVoiture.arreter(); // Affiche "La voiture Toyota s'arrête !"
``` 
Dans cet exemple, nous avons créé une instance de la classe Voiture avec la marque "Toyota" et l'année 2021, puis nous avons appelé les méthodes demarrer() et arreter() sur cette instance.

Les classes en TypeScript permettent de regrouper des données et des comportements liés, favorisant ainsi la modularité, la réutilisation du code et une approche orientée objet dans le développement d'applications.

### 2-2 Qu'est ce qu'un constructeur de classe ?
------------------------------------------------

Le constructeur de classe est utile pour garantir que les instances de la classe sont créées avec les attributs nécessaires et pour effectuer des initialisations spécifiques avant d'utiliser une instance.  Il peut également être utilisé pour effectuer d'autres actions lors de la création d'une instance, telles que l'appel d'autres méthodes ou l'exécution de code supplémentaire.  

### 2-3 Qu'est ce qu'une instance de classe ?
---------------------------------------------

En TypeScript (TS), une instance fait référence à un objet spécifique créé à partir d'une classe. Une instance est un exemplaire unique de cette classe, possédant ses propres attributs et pouvant appeler les méthodes définies dans la classe.

Pour créer une instance d'une classe , nous utilisons le mot-clé new suivi du nom de la classe et des arguments requis par le constructeur. Par exemple :
```
const maVoiture = new Voiture("Toyota", 2021);
maVoiture.demarrer(); // Affiche "La voiture Toyota démarre !"
maVoiture.arreter(); // Affiche "La voiture Toyota s'arrête !"
```

### 2-4 Comment vérifier qu'une classe est d'une certaine instance ?
--------------------------------------------------------------------
```
//methode 1
if (maVoiture instanceof Voiture){
  console.log("t'as raison");
}
//methode 2
console.log(maVoiture instanceof (Voiture));
```

### 2-5 Qu'est ce que `this` dans une classe ?
----------------------------------------------
C'est un mot clé qui fait référence à l'instance actuelle de la classe. Il permet d'accéder aux attributs et méthodes interieures à la classe.  
Lorsque vous utilisez this dans le contexte d'une classe, cela signifie que vous faites référence à l'objet spécifique (l'instance) qui est en train d'appeler le code à ce moment-là.

### 2-6 Qu'est ce qu'une méthode de classe ? 
--------------------------------------------
une fonction définie à l'intérieur d'une classe en programmation orientée objet. Elle représente un comportement ou une action que la classe peut effectuer.

### 2-7 Qu'est ce que la visibilité des propriétés ? 
----------------------------------------------------
La visibilité des propriétés d'une classe définit l'accès et la portée de ces propriétés depuis d'autres parties du code. En TypeScript, il existe trois types de visibilité pour les propriétés d'une classe : public, private et protected.  
-Public c'est le niveau de visibilité par défaut. Les propriétés sont accèssible à partir de n'importe quelle partie du code.
-private : Les propriétés marquées comme private ne sont accessibles qu'à l'intérieur de la classe où elles sont déclarées. Elles ne peuvent pas être accédées ou modifiées en dehors de la classe.  
-protected : Les propriétés marquées comme protected sont similaires aux propriétés private, mais elles sont également accessibles dans les classes dérivées (sous-classes). Elles ne peuvent pas être accédées en dehors de la classe ou des classes dérivées.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3
==========
### Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre)
------------------------------------------------------------------------------------------------
En TypeScript, il est possible de diviser un programme en différents fichiers en utilisant des modules et des importations/exportations.

Voici les étapes pour diviser votre programme en différents fichiers en utilisant des classes dans TypeScript :

Créez un fichier pour chaque classe que vous souhaitez définir. Par exemple, vous pouvez avoir un fichier Person.ts pour la classe Person et un fichier Car.ts pour la classe Car.

Dans chaque fichier de classe, utilisez le mot-clé export devant la définition de classe pour rendre la classe exportable. Par exemple, dans Person.ts :
```
export class Person {
  // ...
}

```
Dans le fichier où vous souhaitez importer les classes, utilisez l'instruction import pour importer les classes nécessaires. Par exemple, dans un fichier main.ts :
```
import { Person } from "./Person";
import { Car } from "./Car";

// Utilisez les classes importées
const john = new Person("John", 25);
const myCar = new Car("Tesla", "Model S");

```

### Qu'est ce que l'héritage ? 
-------------------------------
L'héritage est un concept clé de la programmation orientée objet (POO) qui permet à une classe d'hériter les propriétés et les comportements d'une autre classe existante, appelée classe parent ou superclasse. La classe qui hérite est appelée classe enfant ou sous-classe.  
L'héritage permet de créer une hiérarchie de classes, où les classes enfants héritent des caractéristiques communes de la classe parent.  
En TypeScript, l'héritage est mis en œuvre à l'aide du mot-clé extends. Lorsque vous déclarez une classe enfant, vous utilisez extends suivi du nom de la classe parent. Par exemple :

```
class animal {
  name:string;

  constructor(name: string) {
    this.name=name
  }

  manger(){
    console.log(`${this.name} est entrain de manger.`);

  }
}

class dog extends animal{
  dormir(){console.log(`${this.name} est entrain de dormir`);
}
}
const monChien = new dog ("TOBY")
console.log(monChien.dormir());
```

### Comment appeler le constructeur d'une classe mère ? 
-------------------------------------------------------  

```
class animal {
  name:string;

  constructor(name: string) {
    this.name=name
  }

  manger(){
    console.log(`${this.name} est entrain de manger.`);

  }
}

class dog extends animal{
  poid:number

   constructor (name: string, poid: number) {
    super(name)
    this.poid = poid;
  }
  dormir(){
    console.log(`${this.name} est entrain de dormir et il a pris ${this.poid} KG!`);
}
}
const monChien = new dog ("TOBY",15)

console.log(monChien.dormir());
```  


### Comment appeler une méthode d'une classe mère ? 
---------------------------------------------------
Pour appeler une méthode de la classe parent (classe mère) à partir d'une classe enfant (classe fille) en TypeScript, vous pouvez utiliser le mot-clé super.

Dans une classe enfant, vous pouvez appeler une méthode de la classe parent en utilisant super.nomDeLaMethode(). Cela permet d'exécuter la version de la méthode définie dans la classe parent.  


```
class Animal {
  constructor() {}

  faireDuBruit() {
    console.log("L'animal fait du bruit.");
  }
}

class Chien extends Animal {
  constructor() {
    super(); // Appel du constructeur de la classe parent
  }

  faireDuBruit() {
    super.faireDuBruit(); // Appel de la méthode de la classe parent
    console.log("Le chien aboie.");
  }
}

const monChien = new Chien();
monChien.faireDuBruit();

``` 

cela affichera ce resultat:

```
L'animal fait du bruit.
Le chien aboie.

```


### Qu'est ce que le polymorphism ? 
-----------------------------------
Le polymorphisme est un concept clé de la programmation orientée objet (POO) qui permet à un objet d'être traité comme une instance de sa classe propre ou comme une instance d'une de ses classes parentes. Cela signifie qu'un même nom de méthode peut avoir différents comportements en fonction du type de l'objet sur lequel elle est appelée.

Le polymorphisme permet de traiter différents objets de manière uniforme, en utilisant des interfaces communes et en exploitant l'héritage et le lien dynamique des méthodes.

Il existe deux types de polymorphisme :

Polymorphisme de sous-type (ou polymorphisme d'héritage) : Il s'agit du polymorphisme qui se produit lorsque des classes héritent d'une même classe parente et redéfinissent ses méthodes. Les objets de ces classes peuvent être traités comme des instances de la classe parente ou de leurs propres classes.

Polymorphisme de paramètre (ou polymorphisme par surcharge) : Il s'agit du polymorphisme qui se produit lorsque plusieurs méthodes portent le même nom mais acceptent des paramètres différents. Cela permet d'appeler une méthode en fonction du type de paramètre fourni.

Voici un exemple pour illustrer le polymorphisme de sous-type :

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level 

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !
### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
*Exemple : Si Joan attaque Leon, cela sera représenté par :*

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes
​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​
### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

***Bonus 1 : Les dégâts de l'arme***

*Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur.*

*Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`*

***Bonus 2 : Interface graphique***

*Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)*

