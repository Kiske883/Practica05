import { inject, Injectable } from '@angular/core';
import { INoticiaInterface } from '../interfaces/inoticia-interface';
import { NEWS } from '../db/news.db';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  // Anulo la carga de mi fichero de datos db, pq vamos a utilizar directamente el response de jsonBlobAPI
  // private news: INoticiaInterface[] = NEWS;
  private news: INoticiaInterface[] = [];

  getAll(): INoticiaInterface[] {
    return this.news;
  }

  getByTitle(titulo: string): INoticiaInterface | undefined {
    return this.news.find(noticia => noticia.titulo === titulo);
  }

  insert(myNew: INoticiaInterface): string {
    this.news.push(myNew);
    return 'ok:Usuario guardado';
  }

  constructor() { }

  // 2 Noticias
  private baseURL = "https://jsonblob.com/api/jsonBlob/1389544641426284544";

  // He creado tambien un Json de 3 Noticias para comprobar que se estan cargando dinamicamente
  // 3 Noticias
  // private baseURL = "https://jsonblob.com/api/jsonBlob/1389613178501128192";

  httpClient = inject(HttpClient);

  getAllNewObservable(): Observable<INoticiaInterface[]> {
    return this.httpClient.get<INoticiaInterface[]>(this.baseURL);
  }

  async getAllNewPromise(): Promise<INoticiaInterface[]> {
    // return lastValueFrom(this.httpClient.get<INoticiaInterface[]>(this.baseURL) );

    try {
      const data = await lastValueFrom(this.httpClient.get<INoticiaInterface[]>(this.baseURL));
      this.news = data; 
      return this.news;
    } catch (error) {
      console.error('Error al obtener noticias', error);
      return [];
    }
  }

}
