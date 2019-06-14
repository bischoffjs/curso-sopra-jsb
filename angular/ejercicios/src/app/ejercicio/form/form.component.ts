import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Tarea} from '../tarea';
import { ServiceTareaService } from '../service-tarea.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() tarea = new EventEmitter<Tarea>();

  constructor(private _datosService: ServiceTareaService) { }

  ngOnInit() {
  }

  addTarea(tarea) {
    let numeroAleatorio = Math.round(Math.random() * 50);
    this._datosService.addTarea(new Tarea(numeroAleatorio, tarea, false));
  }

}
