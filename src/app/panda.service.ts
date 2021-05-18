import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PandaService {

  message  = new EventEmitter();
  private bestiaire: Panda[] = [
    { id: 1, name: 'Po', speciality: 'Kung Fu Master'},
    { id: 2, name: 'Chichi', speciality: 'Panda'}
  ];

  constructor() { }

  getAll(): Observable<Panda[]> {
    console.log('getALL');
    return of(Object.assign([], this.bestiaire));
  }

  addPanda(panda: Panda): void {
    console.log('ADD');
    this.bestiaire.push(panda);
    this.message.emit();
  }
}
export interface Panda {
  id: number;
  name: string;
  speciality: string;
}
