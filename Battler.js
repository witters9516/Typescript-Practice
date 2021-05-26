export class Battler {
    constructor(battlerName, hp, level) {
        this.battlerName = battlerName;
        this.hp = hp;
        this.level = level;
    }
    /**
     * getBattlerName
     */
    getBattlerName() {
        return this.battlerName;
    }
    /**
     * getHP
  
    */
    getHP() {
        return this.hp;
    }
    /**
     * getLevel
 
    */
    getLevel() {
        return this.level;
    }
    /**
     * setBattlerName
     */
    setBattlerName(battlerName) {
        this.battlerName = battlerName;
    }
    /**
     * setHP
     */
    setHP(hp) {
        this.hp = hp;
    }
    /**
    * setLevel
    */
    setLevel(level) {
        this.level = level;
    }
    toString() {
        return "Battle Name: " + this.battlerName + "\n" +
            "HP: " + this.hp + "/n" +
            "Level: " + this.level;
    }
}
