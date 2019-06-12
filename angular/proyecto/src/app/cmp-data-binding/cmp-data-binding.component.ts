import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent {

  nombre: string = 'Jorge';
  activadoModoEdicion: boolean = false;

  changeModoEdicion() {
    this.activadoModoEdicion = !this.activadoModoEdicion;
  }

  resetNombre() {
    this.nombre = '';
  }


  cambioNombre(event) {
    this.nombre = event.target.value;
  }

  mostrarValor(valor) {
    console.log(valor);
  }

  }
