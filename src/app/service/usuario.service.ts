import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario, UsuarioOrds } from '../model/usuario.model';
const endpoint = 'https://aw1scklepecd8pu-proyectoupla.adb.ca-montreal-1.oraclecloudapps.com/ords/upla/rest-v2/';

export interface UserLogin {
	USERNAME: string;
	PASSWORD: string;
}

export interface JwtResponse {
	user: {
		id: number,
		name: string,
		email: string,
		access_token: string,
		expires_in: number
	}
}

@Injectable({
	providedIn: 'root'
})

export class UsuarioService {
	constructor(private http: HttpClient) { }

	getUsuarios(): Observable<any> {
		return this.http.get<UsuarioOrds>(endpoint + 'usuarios').pipe(
			catchError(this.handleError)
		);
	}

	getUsuario(id: string): Observable<any> {
		return this.http.get<Usuario>(endpoint + 'usuarios/' + id).pipe(
			catchError(this.handleError)
		);
	}



	singIn(user: string, pass: string): Observable<any> {
		var userLogin: UserLogin = { USERNAME: user, PASSWORD: pass };
		return this.http.post(endpoint + 'usuarios/', userLogin).pipe(
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse): any {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		return throwError(
			'Something bad happened; please try again later.');

	}

}
