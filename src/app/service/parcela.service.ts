import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Parcela, ParcelaOrds } from '../model/parcela.model';
const endpoint = 'https://aw1scklepecd8pu-proyectoupla.adb.ca-montreal-1.oraclecloudapps.com/ords/upla/rest-v2/';

@Injectable({
	providedIn: 'root'
})
export class ParcelaService {

	constructor(private http: HttpClient) { }

	getUsuarioParcelas(id_usuario: number): Observable<any> {
		return this.http.get<ParcelaOrds>(endpoint + 'usuarios/parcelas?ID_USUARIO=' + id_usuario).pipe(
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
