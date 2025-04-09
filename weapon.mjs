export class weapon {
    constructor(id, name, description, numDieDamage, type, quality){
        this.id = id;
        this.name = name;
        this.description = description;
        this.numDieDamage = numDieDamage;
        this.type = type;
        this.quality = quality;
    }
}

const weapon1 = new weapon (1, "Shadowfang Bow", "A bow crafted from the bones of ancient dragons, its arrows never miss their mark.", 2, "arcane", 28)
const weapon2 = new weapon (2, "Bladesong Sword", "A sword that hums with a melody of power, striking fear into foes.", 3, "common", 24)
const weapon3 = new weapon (3, "Eclipse Wand", "A wand imbued with the essence of a solar eclipse, casting spells of blinding light.", 4, "common", 30)
const weapon4 = new weapon (4, "Ironwood Longbow", "A longbow carved from enchanted ironwood, its arrows pierce even the toughest armor.", 2, "common", 23)
const weapon5 = new weapon (5, "Stormcleaver Sword", "A massive sword that crackles with the fury of a thunderstorm.", 5, "arcane", 29)
const weapon6 = new weapon (6, "Soulpiercer Wand", "A wand said to channel the despair of lost souls into devastating spells.", 3, "arcane", 25)
const weapon7 = new weapon (7, "Phoenix Bow", "A bow crafted from the bones of ancient dragons, its arrows never miss their mark.", 3, "arcane", 27)
const weapon8 = new weapon (8, "Crystalblade Sword", "A sword forged from pure crystal, reflecting light in dazzling arcs.", 4, "common", 26)
const weapon9 = new weapon (9, "Frostshard Wand", "A wand that summons the biting cold of the Arctic to freeze enemies in their tracks.", 2, "arcane", 22)
const weapon10 = new weapon (10, "Dreadhunter Bow", "A bow crafted to hunt creatures of the dark, glowing faintly in their presence.", 3, "common", 21)