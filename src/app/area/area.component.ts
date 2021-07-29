import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AreaService } from '../service/area.service'
import { AreaOrds, Area } from '../model/area.model'
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-area',
	templateUrl: './area.component.html',
	styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit, OnDestroy {

	title = 'Como usar el Componente Google Maps de Angular 9';
	center = { lat: -33.03280963348656, lng: -71.3530733248867 };
	zoom = 17;
	display?: google.maps.LatLngLiteral;

	lineChartData: ChartDataSets[] = [
		{ data: [45, 33, 35, 45, 35, 45, 33, 35, 45, 35, 45], label: 'Sensor 1', fill: false },
		{ data: [35, 33, 25, 35, 35, 35, 13, 25, 35, 25, 35], label: 'Sensor 2', fill: false },
		{ data: [25, 23, 15, 25, 25, 25, 23, 15, 25, 25, 25], label: 'Sensor 3', fill: false },
		{ data: [15, 13, 15, 15, 15, 15, 23, 15, 15, 15, 15], label: 'Sensor 4', fill: false }
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
	panelOpenState = false;
	lineChartLegend = true;
	lineChartPlugins = [];
	lineChartType = 'line';
	id: number;
	private sub: any;

	areaOrds: AreaOrds;
	areas = [];

	constructor(private route: ActivatedRoute, public areaRest: AreaService) { }
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id'];
			console.log(this.id);
			this.getArea(this.id);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	nombre:any;
	texto_boton: any;
	
	getArea(id_area: any): void {
		this.areaRest.getArea(parseInt(window.localStorage.getItem("id_usuario")), id_area).subscribe((resp: any) => {
			this.areaOrds = resp;
			console.log(this.areaOrds.items);
			this.areas = this.areaOrds.items;
			this.nombre = this.areas[0].nombre; 
			this.texto_boton=this.areas[0].button_text;
			
		});
	}
	
	postRegar(): void {
		this.areaRest.postRegar(parseInt(window.localStorage.getItem("id_usuario")), this.id).subscribe((resp: any) => {});
	}

}
