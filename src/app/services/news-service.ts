import { inject, Injectable } from '@angular/core';
import { INoticiaInterface } from '../interfaces/inoticia-interface';
import { NEWS } from '../db/news.db';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  /* Anulamos las funciones generadas para utilizar el fichero news.db.ts
     y vamos a implementar la peticion al API
  private news: INoticiaInterface[] = NEWS ;

  getAll() : INoticiaInterface[] {
    return this.news;
  }

  getByTitle(titulo:string) : INoticiaInterface | undefined {
    return this.news.find(noticia => noticia.titulo === titulo ) ; 
  }

  insert( myNew : INoticiaInterface)  : string {
    this.news.push(myNew) ;
    return 'ok:Usuario guardado' ;
  }

  constructor() { }
  */
  // 2 Noticias
  private baseURL = "https://jsonblob.com/api/jsonBlob/1389544641426284544";

  httpClient = inject(HttpClient);

  getAllUserObservable() : Observable<INoticiaInterface[]>{
    return this.httpClient.get<INoticiaInterface[]>(this.baseURL) ;
  }

  getAllNewPromise():Promise<INoticiaInterface[]> {
    return lastValueFrom(this.httpClient.get<INoticiaInterface[]>(this.baseURL) );
  }


}
