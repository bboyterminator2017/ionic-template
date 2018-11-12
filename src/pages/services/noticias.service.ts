import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Noticia } from "../model/noticia";


@Injectable()
export class NoticiasService {
        constructor(private http : HttpClient) { }

        getNoticias() : Observable<Noticia[]>{
            return this.http.get<Noticia[]>(
                'http://www.mocky.io/v2/5be58e512f000091000fc2e8'
            );
            
    }
}