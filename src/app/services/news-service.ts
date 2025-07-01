import { Injectable } from '@angular/core';
import { INoticiaInterface } from '../interfaces/inoticia-interface';
import { NEWS } from '../db/news.db';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

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
}
