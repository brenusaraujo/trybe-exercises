abstract class Character {
  // constructor(parameters) {}
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log("this is a meleeCharacter talking");
  }
  specialMove(): void {
    console.log("this is a meleeCharacter's specialmove");
  }
  // constructor(parameters) {}
}
class LongRangeCharacter extends Character {
  talk(): void {
    console.log("this is a LongRangeCharacter talking");
  }
  specialMove(): void {
    console.log("this is a LongRangeCharacter's specialmove");
  }
  // constructor(parameters) {}
}

const newCharacter = (character: Character): void => {
  character.specialMove();
  character.talk();
};

const test = new MeleeCharacter();
const test2 = new LongRangeCharacter();

newCharacter(test);
newCharacter(test2);
