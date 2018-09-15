class Recrue {
  constructor() {
    if (!this.name) {
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
    return "randomPinpin";
  }

  rnd(max) {
    return Math.round(Math.random() * max);
  }
}

export default Recrue;