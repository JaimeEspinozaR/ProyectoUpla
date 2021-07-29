import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Mensaje, MensajeOrds } from '../model/mensaje.model';
const endpoint = 'https://aw1scklepecd8pu-proyectoupla.adb.ca-montreal-1.oraclecloudapps.com/ords/upla/rest-v2/';

export interface MensajePost {
	id_usuario: number;
	id_parcela: number;
	mensaje: any
}

@Injectable({
	providedIn: 'root'
})


export class MensajeService {
 
	mensaje:Mensaje;
	
	constructor(private http: HttpClient) { }

	getUsuarioMensajes(id_usuario: number): Observable<any> {
		return this.http.get<MensajeOrds>(endpoint + 'usuarios/mensajes?ID_USUARIO=' + id_usuario).pipe(
			catchError(this.handleError)
		);
	}
	
 
	postUsuarioMensajes(user: number, parcela: number, mensaje: string): Observable<any> {
		 var mensajePost: MensajePost = { id_usuario: user, id_parcela: parcela, mensaje: mensaje};
	 
		return this.http.post(endpoint + 'usuarios/mensajes', mensajePost).pipe(
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
