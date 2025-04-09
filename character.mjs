import weapon from weapon.mjs;
class character{
    constructor (id, name, ocupation, gold, weapon, pouch, life){
        this.id = id;
        this.name = name;
        this.ocupation = ocupation;
        this.gold = gold;
        this.weapon = weapon;
        this.pouch = pouch;
        thislife = life;
    }
}

const character1 = new character(1, "Kaelen Fireheart", "priest", 2600, {}, {}, 16);
const character2 = new character(2, "Braga the Silent", "thug", 4800, {}, {}, 19);
const character3 = new character(3, "Willa Thornroot", "peasant", 340, {}, {}, 12);
const character4 = new character(4, "Orlin Dustwalker", "priest", 1500, {}, {}, 10);
const character5 = new character(5, "Rurik Ironjaw", "thug", 3400, {}, {}, 18);

