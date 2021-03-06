import {
  Player
} from './Player';
let hash = require('hash.js');

class Recrue extends Player {
  constructor(props) {
    super(props);
    if (!this.name) {
      this.id = props;
      this.generateInfos();
    }
  }

  generateInfos() {
    this.name = this.generateName();
    this.heroClass = this.generateHeroClass();
    this.skill = this.rnd(5);
    this.focus = this.rnd(5); // suit les ordres
    this.hearts = this.rnd(5); // bonne humeur, résiste aux échecs
    this.fame = this.rnd(6) - 3; // neg = toxic
      // volubilité ?
      // inventaire de départ
    this.sex = (this.rnd(5) === 5) ? 'f': 'm';
    this.potentialSkill = this.rnd(5); // caché
    this.available = true;
    this.creationDate = Date.now();
    this.hash = this.generateHash();
  }

  generateName() {
    let syllabes = [
      'a','ana','ba','bar','col','de','fa','god','guy','h','ha','i',
      'jack','ji','jo','k','kal','lem','la','lim',
      'ma','mo','mi','ni',
      'pan','pim','per','qua','ren','ro','sad','Super',
      'tan','top','tu','Uber',
      'va','vé','wal','X','xa','yo','yang','zo','zé'
    ];
    let nomRandom = '';
    for (let i=0; i < (this.rnd(3) + 1); i++) {
      let newSyllabe = syllabes[this.rnd(syllabes.length - 1)];
      nomRandom += newSyllabe;
    }
    return nomRandom;
  }

  generateHeroClass() {
    let allClasses = [
      'symetrist', 'cleric', 'tank', 'swordsman'
    ];
    // bow, offheal, offtank
    // je pense que ça évoluera au fil du temps, pour forcer les joueurs à pick de nouvelles recrues ou à restuff
    return allClasses[this.rnd(3)];
  }

  generateHash() {
    return hash.sha256().update(this.name + this.creationDate).digest('hex');
  }

  rnd(max) {
    return Math.round(Math.random() * max);
  }
}

export default Recrue;
