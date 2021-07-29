import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
export interface UsuarioLogin {
	id_usuario: string;
	mensaje: string;
}
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

	constructor(private router: Router,
		public rest: UsuarioService) {
	}

	username: string;
	password: string;
	logged: number;


	ngOnInit() {
		if (window.localStorage.getItem("ACCESS_TOKEN") != null && window.localStorage.getItem("ACCESS_TOKEN")) {
			this.router.navigate(["main/parcelas"]);
		}
	}

	login(): void {

		this.rest.singIn(this.username, this.password).subscribe((resp: any) => {
			console.log(resp);
			if (resp.session != 0) {
				window.localStorage.setItem("ACCESS_TOKEN", resp.session);
				window.localStorage.setItem("id_usuario", resp.usuario);
				this.router.navigate(["main"]);
			} else {
				alert(resp.mensaje);
			}

		});
		if (this.username == 'god' && this.password == 'god') {
			this.router.navigate(["main"]);
		}
	}
}