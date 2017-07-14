"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeroListComponent = (function () {
    function HeroListComponent(heroService) {
        this.heroService = heroService;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroListComponent.prototype.selectHero = function (hero) { this.selectedHero = hero; };
    return HeroListComponent;
}());
exports.HeroListComponent = HeroListComponent;
