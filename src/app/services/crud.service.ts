import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private http: HttpClient) { }

  public  getFotos(): Observable<any> {
    return this.http.get(`http://186.208.240.229:3000/gabriel/painel/api/Site/site/informacoesBasicasSite/'*'`);
  }
}
