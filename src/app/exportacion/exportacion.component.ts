import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-exportacion',
	templateUrl: './exportacion.component.html',
	styleUrls: ['./exportacion.component.css']
})
export class ExportacionComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	headers = [
		"ID",
		"PARCELA",
		"AREA",
		"FECHA LECTURA",
		"T. AMBIENTE",
		"H. AMBIENTE",
		"T. SUELO",
		"H. SUELO",
		"ESTADO"];

	rows = [
	  {
      "ID": "1",
      "PARCELA": "Parcela Limache",
      "AREA": "LOS PALTOS",
      "FECHA LECTURA": "15/07/21 09:00",
      "T. AMBIENTE": "25 C.",
      "H. AMBIENTE": "70%",
      "T. SUELO": "20 C.",
      "H. SUELO": "40%",
      "ESTADO": "OK"
    },
      {
      "ID": "2",
      "PARCELA": "Parcela Limache",
      "AREA": "LOS PALTOS",
      "FECHA LECTURA": "15/07/21 10:00",
      "T. AMBIENTE": "25 C.",
      "H. AMBIENTE": "70%",
      "T. SUELO": "20 C.",
      "H. SUELO": "40%",
      "ESTADO": "OK"
    },
      {
      "ID": "3",
      "PARCELA": "Parcela Limache",
      "AREA": "LOS PALTOS",
      "FECHA LECTURA": "15/07/21 11:00",
      "T. AMBIENTE": "25 C.",
      "H. AMBIENTE": "70%",
      "T. SUELO": "20 C.",
      "H. SUELO": "40%",
      "ESTADO": "OK"
    },
      {
      "ID": "4",
      "PARCELA": "Parcela Limache",
      "AREA": "LOS PALTOS",
      "FECHA LECTURA": "15/07/21 12:00",
      "T. AMBIENTE": "25 C.",
      "H. AMBIENTE": "70%",
      "T. SUELO": "20 C.",
      "H. SUELO": "20%",
      "ESTADO": "OK"
    },
      {
      "ID": "5",
      "PARCELA": "Parcela Limache",
      "AREA": "LOS PALTOS",
      "FECHA LECTURA": "15/07/21 13:00",
      "T. AMBIENTE": "25 C.",
      "H. AMBIENTE": "70%",
      "T. SUELO": "20 C.",
      "H. SUELO": "10%",
      "ESTADO": "Necesita Agua"
    }
	]
}
