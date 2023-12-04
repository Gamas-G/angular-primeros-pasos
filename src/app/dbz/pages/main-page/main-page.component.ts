import { Component } from '@angular/core';

import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  
  //Aqui estamos trabajando con la injeccion de dependecia
  constructor( private dbzService: DbzService ) {}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ): void{
    this.dbzService.deleteChracterById(id);
  }

  onNewCharacter( characters: Character ): void{
    this.dbzService.addCharacter( characters );
  }

}
