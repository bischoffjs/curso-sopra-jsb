import { Component, OnInit } from '@angular/core';
import { Oferta } from './oferta';

@Component({
  selector: 'app-cmp-ofertas-trabajo',
  templateUrl: './cmp-ofertas-trabajo.component.html',
  styleUrls: ['./cmp-ofertas-trabajo.component.css']
})
export class CmpOfertasTrabajoComponent implements OnInit {

  ofertas: Array<Oferta> = [
    new Oferta('Analista Programador Fullstack', 'En Grupo CMC precisamos incorporar en uno de nuestros Clientes del área de Industria, un Analista Programador Fullstack con experiencia en .net y angular', 'https://cdn-yams.schibsted.com/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/63/632ec4ab-50fc-426f-84f3-7653ccd43117?rule=largeDevice155'),

    new Oferta('Desarrollador FullStack Angular y C#', 'Factum IT selecciona para empresa líder del sector de las Telecomunicaciones un desarrollador FullStack para proyecto estable de larga duración', 'https://media.infojobs.net/appgrade/pictures/pic-company-logo.png'),

    new Oferta('Desarrolladores Java', 'Importante consultora en continuo crecimiento precisa incorporar desarrolladores con más de un año de experiencia en desarrollos Java para proyecto estable en cliente del sector público situado en Madrid Zona de Costa Rica', 'https://www.infojobs.net/logo/logo/do-get.xhtml?id=26767972496&dgv=2749350254732614582')
  ];

  constructor() { }

  ngOnInit() {
  }

}
