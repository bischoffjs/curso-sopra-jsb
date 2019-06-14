import { Injectable, EventEmitter } from '@angular/core';
import {Tarea} from './tarea';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceTareaService {

  private _tareas2: Array<Tarea> = [];
  private _tareas: Array<Tarea> = [];
  tareasCambiadas = new EventEmitter<Array<Tarea>>();
  constructor() { }

  get tareas(): Array<Tarea> {
    return this._tareas;
  }

  addTarea(tarea: Tarea): void {
    this._tareas.push(tarea);
    // console.log(this._tareas);
  }

  deleteTarea(tarea: Tarea): void {
    this._tareas = this._tareas.filter(t => {
      return t.id !== tarea.id;
    });

    this.tareasCambiadas.emit(this._tareas);
  }

  completarTarea(tarea: Tarea): void {
    for (let elem of this._tareas) {
      if (elem.id === tarea.id) {
        elem.completa = true;
      }
    }
    // console.log(this._tareas);
  }
  deshacerTarea(tarea: Tarea): void {
    for (let elem of this._tareas) {
      if (elem.id === tarea.id) {
        elem.completa = false;
      }
    }
    // console.log(this._tareas);
  }
}
