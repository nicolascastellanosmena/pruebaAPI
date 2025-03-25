import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root2 } from './interfaz';  // Asegúrate de importar la interfaz Root2 desde su archivo

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlP = "https://saih.chj.es/chj/saih/glayer/listaEstaciones?t=p&id=";
  private urlE = "https://saih.chj.es/chj/saih/glayer/listaEstaciones?t=e&id=";

  constructor(private http: HttpClient) { }

  // Llamada a la URL P que ahora devuelve un Observable de un array de Root2
  obtenerEstacionesP(): Observable<Root2[]> {
    return this.http.get<Root2[]>(this.urlP);
  }

  // Llamada a la URL E que ahora devuelve un Observable de un array de Root2
  obtenerEstacionesE(): Observable<Root2[]> {
    return this.http.get<Root2[]>(this.urlE);
  }
}
