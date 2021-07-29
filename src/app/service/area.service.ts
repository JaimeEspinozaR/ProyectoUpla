import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Area, AreaOrds } from '../model/area.model';
const endpoint = 'https://aw1scklepecd8pu-proyectoupla.adb.ca-montreal-1.oraclecloudapps.com/ords/upla/rest-v2/';

export interface AreaPost {
	id_usuario: number;
	id_area: number; 
}

@Injectable({
	providedIn: 'root'
})


export class AreaService {

	area: Area;

	constructor(private http: HttpClient) { }

	getUsuariosParcelaAreas(id_usuario: number, id_parcela: number): Observable<any> {
		return this.http.get<AreaOrds>(endpoint + 'usuarios/parcelas/areas?id_usuario=' + id_usuario + '&id_parcela=' + id_parcela).pipe(
			catchError(this.handleError)
		);
	}

	getArea(id_usuario: number, id_area: number): Observable<any> {
		return this.http.get<AreaOrds>(endpoint + 'areas?id_usuario=' + id_usuario + '&id_area=' + id_area).pipe(
			catchError(this.handleError)
		);
	}

	postRegar(id_usuario: number, id_area: number): Observable<any> {
		var mensajePost: AreaPost = { id_usuario: id_usuario, id_area: id_area};
		return this.http.post(endpoint + 'areas', mensajePost).pipe(
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
