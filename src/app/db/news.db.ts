import { INoticiaInterface } from "../interfaces/inoticia-interface";

// Damos a un paso mas alla añadiendo un fichero db, para consumirlo 
// desde un service

// http://jsonblob.com/1389544641426284544

// LAN0 - 20250701
// app.quicktype.io - es una herramienta que desde un json nos genera la interface

export const NEWS : INoticiaInterface[] = [
    {
      titulo: 'Angular 20 lanzado',
      imagen: 'https://placehold.co/200x120',
      texto: 'Incluye mejoras significativas en signals y SSR.',
      fecha: '2025-06-27'
    },
    {
      titulo: 'Nuevo ciclo de formación',
      imagen: 'https://placehold.co/200x120',
      texto: 'Los desarrolladores mejoran sus habilidades con Angular.',
      fecha: '2025-06-26'
    }           
] ;