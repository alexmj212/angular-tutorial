import { Component, OnInit } from '@angular/core';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}