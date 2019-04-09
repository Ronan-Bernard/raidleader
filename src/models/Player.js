export class Player {
  id;
  hash;
  name;
  position;
  heroClass;
  skill;
  focus;
  hearts;
  fame;
  sex;
  potentialSkill;
  available;
  creationDate;

  constructor(props) {
    if (this.props !== undefined && this.props.id) {
      this.id = this.props.id
    }
  }
}
