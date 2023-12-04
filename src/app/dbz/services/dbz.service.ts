import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 5000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Piccolo',
    power: 8000
  }
];

  addCharacter( character: Character ): void{

    const newCharacter: Character = { id:uuid(), ...character };

    this.characters.push( newCharacter ); 
  }

  // onDeleteCharacter( index: number ): void{
    // this.characters.splice(index, 1);
  deleteChracterById( id: string ): void{
    console.log('Se borrara: ', id);
    
    this.characters = this.characters.filter( chracter => chracter.id !== id );
  }
    
}