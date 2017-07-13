import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../classes/hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/templates/hero-detail.component.html',
    styleUrls: ['app/styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(hero => this.hero = hero);
    }

    @Input() hero: Hero;

    save(): void {
        this.heroService.update(this.hero)
        .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

}