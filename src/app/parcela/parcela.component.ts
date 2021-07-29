import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Router } from '@angular/router';

import { AreaService} from '../service/area.service'
import { AreaOrds, Area} from '../model/area.model'
import { OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  link: string;
}

@Component({
  selector: 'app-parcela',
  templateUrl: './parcela.component.html',
  styleUrls: ['./parcela.component.css']
})
export class ParcelaComponent implements OnInit {
	
  title = 'Como usar el Componente Google Maps de Angular 9';
  center = { lat: -33.03280963348656, lng: -71.3530733248867 };
  zoom = 17;
  display?: google.maps.LatLngLiteral;

  lineChartData: ChartDataSets[] = [
    { data: [45, 33, 35, 45, 35, 45, 33, 35, 45, 35, 45], label: 'Area 1', fill: false },
    { data: [35, 33, 25, 35, 35, 35, 13, 25, 35, 25, 35], label: 'Area 2', fill: false },
    { data: [25, 23, 15, 25, 25, 25, 23, 15, 25, 25, 25], label: 'Area 3', fill: false },
    { data: [15, 13, 15, 15, 15, 15, 23, 15, 15, 15, 15], label: 'Area 4', fill: false }
  ];
  lineChartLabels: Label[] = ['22 Marzo', '25 Marzo', '29 Marzo', '1 Abril', '5 Abril', '8 Abril', '12 Abril', '15 Abril', '19 Abril', '26 Abril'];
  lineChartOptions: ChartOptions = {
    responsive: true,

  };
  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];


  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  tiles: Tile[] = [
    { text: 'Area 1', cols: 3, rows: 1, color: 'lightgreen', link: 'main/area' },
    { text: 'Area 2', cols: 1, rows: 2, color: 'lightgreen', link: 'main/area' },
    { text: 'Area 3', cols: 1, rows: 1, color: 'lightpink', link: 'main/area' },
    { text: 'Area 4', cols: 2, rows: 1, color: 'lightgreen', link: 'main/area' },
    { text: 'Area 5', cols: 2, rows: 1, color: 'lightgreen', link: 'main/area' },
  ];
  redirect(pagename: string): void {
//	  this.router.
    this.router.navigate(['main/area',pagename]);
  }
 	areaOrds: AreaOrds;
	
	areas = []; 
	
	getUsuarioMensajes(): void {
		this.areaRest.getUsuariosParcelaAreas(parseInt(window.localStorage.getItem("id_usuario")),1).subscribe((resp: any) => {
			this.areaOrds = resp;
			this.areas = this.areaOrds.items; 
		});

	}
	


  constructor(private router: Router,public areaRest: AreaService) { }
	ngOnInit(): void {
		this.getUsuarioMensajes();
	}
}
