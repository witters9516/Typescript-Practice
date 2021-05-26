export class Battler
{
    battlerName:string;
    hp:number;
    level:number;

    constructor(battlerName: string, hp: number, level: number)
    {
        this.battlerName = battlerName;
        this.hp = hp;
        this.level = level;
    }

    /**
     * getBattlerName
     */
    getBattlerName() : string
    {
        return this.battlerName;
    }

    /**
     * getHP
  
    */
    getHP() : number
    {
        return this.hp;
    }

    /**
     * getLevel
 
    */
    getLevel() : number
    {
        return this.level;
    }

    /**
     * setBattlerName
     */
    setBattlerName(battlerName:string) 
    {
        this.battlerName = battlerName;
    }

    /**
     * setHP
     */
    setHP(hp:number) 
    {
        this.hp = hp;
    }

     /**
     * setLevel
     */
    setLevel(level:number) 
    {
        this.level = level;
    }

    toString()
    {
        return "Battle Name: " + this.battlerName + "\n" +
        "HP: " + this.hp + "/n" + 
        "Level: " + this.level;
    }
}