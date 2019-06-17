"use strict";
exports.__esModule = true;
var hero = /** @class */ (function () {
    function hero() {
    }
    ;
    hero.prototype.getCodenome = function () {
        return this.codenome;
    };
    hero.prototype.setCodenome = function (codenome) {
        this.codenome = codenome;
    };
    hero.prototype.getIdsecreta = function () {
        return this.idsecreta;
    };
    hero.prototype.setIdsecreta = function (idsecreta) {
        this.idsecreta = idsecreta;
    };
    return hero;
}());
exports.hero = hero;
