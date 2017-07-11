import { Component, OnInit } from '@angular/core';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
})

export class DashboardComponent implements OnInit{ 
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {

    }

    ngOnInit(): void {
        this.heroService.getHerores()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }
}