import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Notificacion, NotificacionOrds } from '../model/notificacion.model';
const endpoint = 'https://aw1scklepecd8pu-proyectoupla.adb.ca-montreal-1.oraclecloudapps.com/ords/upla/rest-v2/';

@Injectable({
	providedIn: 'root'
})
export class NotificacionService {

	constructor(private http: HttpClient) { }

	getUsuarioNotificaciones(id_usuario: number): Observable<any> {
		return this.http.get<NotificacionOrds>(endpoint + 'usuarios/notificaciones?ID_USUARIO=' + id_usuario).pipe(
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
