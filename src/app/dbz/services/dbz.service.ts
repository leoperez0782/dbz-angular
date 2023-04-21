import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }

     public characters: Character[] = [{
        id: uuid(),
        name: 'Krilin',
        power: 500
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 7000
    }
    ];

    addCharacter(character: Character): void {
        const newCharacter = {
            ...character,
            id: uuid(),
        }
        this.characters.push(character);
    }

    deleteCharacterById(id: string) : void {
        console.log("main page")
        this.characters = this.characters.filter(character => character.id !== id );
    }

    
}