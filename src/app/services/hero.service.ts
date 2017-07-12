import { Injectable } from '@angular/core';

import { Hero } from '../classes/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable()
export class HeroService {

    getHero(id: number): Promise<Hero> {
        return this.getHerores()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHerores(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}