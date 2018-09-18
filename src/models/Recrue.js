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
    this.potentialSkill = this.rnd(5);
    this.focus = this.rnd(5); // suit les ordres
    this.purity = this.rnd(5); // low = toxic
    this.cheerfulness = this.rnd(5); // bonne humeur, résiste aux échecs
    this.sex = (this.rnd(5) === 5) ? 'f': 'm';
  }

  generateName() {
    let syllabes = [
      'bar','col','de','fa','guy','h','ha','jo','k','kal','lem','la','lim',
      'ma','mo','mau','ni',
      'pim','per','qua','ren','ro','sad','super','tu',
      'va','vé','wal','xa','zo','zé'
    ];
    let nomRandom = '';
    for (let i=0; i < (this.rnd(3) + 1); i++) {
      let newSyllabe = syllabes[this.rnd(syllabes.length) - 1];
      nomRandom += newSyllabe;
    }
    return nomRandom;
  }

  rnd(max) {
    return Math.round(Math.random() * max);
  }
}

export default Recrue;