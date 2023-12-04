import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl:'./list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCaracter( index: number ): void{
  // }
  
  onDeleteCharacter( id?: string ): void{
    //TODO Emitir el ID del personaje
    if( !id ) return;
    this.onDelete.emit( id );
  }

 }
