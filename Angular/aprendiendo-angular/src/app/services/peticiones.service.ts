import { Injectable } from '@angular/core'; //Injecta nuestro servicio en otra clase
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Permiten hacer peticiones Ajax y modificar las cabezeras
import { Observable } from 'rxjs-compat/Observable'; //Recoje las peticiones

@Injectable()
export class PeticionesService{

	public url: string;

	constructor(
		//Injectar nuestro servicio http
		public _http: HttpClient

		){

		this.url = "https://reqres.in/";
	}
	//Devuelbe un observable
	getUser(userId): Observable<any>{
		return this._http.get(this.url+'api/users/'+userId);
	}
	addUser(user): Observable<any>{
		let params = JSON.stringify(user);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.post(this.url+'api/users',params, {headers: headers});
	}

}