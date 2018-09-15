class Recrue {
  constructor() {
    if (!this.name) {
      this.generateInfos();
    }
  }

  generateInfos() {
    this.name = this.generateName();
    this.skill = this.rnd(0,5);
    this.potentialSkill = this.rnd(0,5);
    this.focus = this.rnd(0,5); // suit les ordres
    this.purity = this.rnd(0,5); // low = toxic
    this.cheerfulness = this.rnd(0,5); // bonne humeur, résiste aux échecs
    this.sex = (this.rnd(0,5) === 5) ? 'f': 'm';
  }

  generateName() {
    return "randomPinpin";
  }

  rnd(min, max) {
    return Math.random() * (max - min) + min;
  }
}

export default Recrue;