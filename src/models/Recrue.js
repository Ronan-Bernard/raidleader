class Recrue {
  constructor(props) {
    if (!this.name) {
      this.id = props;
      this.generateInfos();
    }
  }

  generateInfos() {
    this.name = this.generateName();
    this.skill = this.rnd(5);
    this.focus = this.rnd(5); // suit les ordres
    this.hearts = this.rnd(5); // bonne humeur, résiste aux échecs
    this.fame = this.rnd(6) - 3; // neg = toxic
      // volubilité ?
      // inventaire de départ
    this.sex = (this.rnd(5) === 5) ? 'f': 'm';
    this.potentialSkill = this.rnd(5); // caché
    // this.heroClass : magie, heal, tank, sword, bow, offheal, offtank
  }

  generateName() {
    let syllabes = [
      'ana','bar','col','de','fa','god','guy','h','ha','i',
      'ji','jo','k','kal','lem','la','lim',
      'ma','mo','mau','ni',
      'pan','pim','per','qua','ren','ro','sad','Super','tu','Uber',
      'va','vé','wal','X','xa','yo','yang','zo','zé'
    ];
    let nomRandom = '';
    for (let i=0; i < (this.rnd(3) + 1); i++) {
      let newSyllabe = syllabes[this.rnd(syllabes.length - 1)];
      nomRandom += newSyllabe;
    }
    return nomRandom;
  }

  rnd(max) {
    return Math.round(Math.random() * max);
  }
}

export default Recrue;