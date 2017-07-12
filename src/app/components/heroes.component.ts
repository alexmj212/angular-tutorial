import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroDetailComponent} from './hero-detail.component';
import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  templateUrl: 'app/templates/heroes.component.html',
  styleUrls: [ 'app/styles/heroes.component.css']
})
export class HeroesComponent implements OnInit{

  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHerores().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
