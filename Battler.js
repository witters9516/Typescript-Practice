"use strict";
exports.__esModule = true;
exports.Battler = void 0;
var Battler = /** @class */ (function () {
    function Battler(battlerName, hp, level) {
        this.battlerName = battlerName;
        this.hp = hp;
        this.level = level;
    }
    /**
     * getBattlerName
     */
    Battler.prototype.getBattlerName = function () {
        return this.battlerName;
    };
    /**
     * getHP
  
    */
    Battler.prototype.getHP = function () {
        return this.hp;
    };
    /**
     * getLevel
 
    */
    Battler.prototype.getLevel = function () {
        return this.level;
    };
    /**
     * setBattlerName
     */
    Battler.prototype.setBattlerName = function (battlerName) {
        this.battlerName = battlerName;
    };
    /**
     * setHP
     */
    Battler.prototype.setHP = function (hp) {
        this.hp = hp;
    };
    /**
    * setLevel
    */
    Battler.prototype.setLevel = function (level) {
        this.level = level;
    };
    Battler.prototype.toString = function () {
        return "Battle Name: " + this.battlerName + "\n" +
            "HP: " + this.hp + "/n" +
            "Level: " + this.level;
    };
    return Battler;
}());
exports.Battler = Battler;
