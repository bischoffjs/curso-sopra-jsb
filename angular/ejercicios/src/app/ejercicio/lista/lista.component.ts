import { Component, OnInit, EventEmitter } from '@angular/core';
import { Tarea } from '../tarea';
import { ServiceTareaService } from '../service-tarea.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tareas: Array<Tarea> = [];
  constructor(private _service: ServiceTareaService) { }

  ngOnInit() {
    this.tareas = this._service.tareas;
    this._service.tareasCambiadas.subscribe((nuevaLista) => {
      this.tareas = nuevaLista;
    });
  }

}
