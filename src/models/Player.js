export class Player {
  id;
  name;
  heroClass;
  skill;
  focus;
  hearts;
  fame;
  sex;
  potentialSkill;
  available;

  constructor(props) {
    if (this.props !== undefined && this.props.id) {
      this.id = this.props.id
    }
  }
}