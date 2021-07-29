import { Component, OnInit } from '@angular/core';

import { ParcelaService } from '../service/parcela.service';
import { Parcela, ParcelaOrds } from '../model/parcela.model';

@Component({
	selector: 'app-parcelas',
	templateUrl: './parcelas.component.html',
	styleUrls: ['./parcelas.component.css']
})
export class ParcelasComponent implements OnInit {

	parcelas: ParcelaOrds;
	cards = [];
	constructor(public rest: ParcelaService) { }

	getUsuarioParcelas(): void {
		this.rest.getUsuarioParcelas(parseInt(window.localStorage.getItem("id_usuario"))).subscribe((resp: any) => {
			this.parcelas = resp;
			this.cards = this.parcelas.items;
		});

	}


	ngOnInit(): void {
		this.getUsuarioParcelas();
	}
}
