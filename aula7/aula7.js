var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Batman = /** @class */ (function (_super) {
    __extends(Batman, _super);
    function Batman() {
        return _super.call(this) || this;
    }
    Batman.prototype.getFraqueza = function () {
        return 'Alfred';
    };
    Batman.prototype.getArqueRival = function () {
        return 'Coringa';
    };
    Batman.prototype.getSuperPoder = function () {
        return this.superPoder;
    };
    Batman.prototype.setSuperPoder = function (superPoder) {
        this.superPoder = superPoder;
    };
    Batman.prototype.getPericia = function () {
        return "A(s) pericia(a) do " + this.getCodenome() + " \u00E9(s\u00E3o): " + this.pericia;
    };
    Batman.prototype.setPericia = function (pericia) {
        this.pericia = pericia;
    };
    Batman.prototype.getPoder = function () {
        return this.poder;
    };
    Batman.prototype.setPoder = function (poder) {
        this.poder = poder;
    };
    return Batman;
}(hero));
var homemMorcego = new Batman();
homemMorcego.setCodenome('Batman');
homemMorcego.setIdsecreta('Bruce Wayme');
homemMorcego.setPericia('ser FODAO');
homemMorcego.setPoder(8000);
homemMorcego.setSuperPoder('ser rico e ter medo de morcegos');
console.log("o nome do heroi \u00E9: " + homemMorcego.getCodenome() + ", e sua identidade secreta \u00E9: " + homemMorcego.getIdsecreta() + ", " + homemMorcego.getPericia() + ", seu poder \u00E9 mais de: " + homemMorcego.getPoder() + ", seu(s) superpoder(es) \u00E9(s\u00E3o): " + homemMorcego.getSuperPoder() + ", seu arqui rival \u00E9: " + homemMorcego.getArqueRival() + ", sua fraqueza \u00E9 " + homemMorcego.getFraqueza());
