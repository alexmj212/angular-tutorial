import { Injectable } from '@angular/core';

import { Hero } from '../classes/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable()
export class HeroService {
    getHerores(): Hero[] {
        return HEROES;
    }
}