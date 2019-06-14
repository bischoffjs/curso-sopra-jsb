import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../tarea';
import { ServiceTareaService } from '../../service-tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea: Tarea;
  @Output() accion = new EventEmitter<Tarea>();
  constructor(private _service: ServiceTareaService) { }

  ngOnInit() {
  }

  completarTarea() {
    this._service.completarTarea(this.tarea);
  }

  deshacerTarea() {
    this._service.deshacerTarea(this.tarea);
  }

  deleteTarea() {
    this._service.deleteTarea(this.tarea);
  }






}
