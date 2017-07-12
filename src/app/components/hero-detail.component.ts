import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { Hero } from '../classes/hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/templates/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    constructor(
        private hereoService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.hereoService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    @Input() hero: Hero;

    goBack(): void {
        this.location.back();
    }

}