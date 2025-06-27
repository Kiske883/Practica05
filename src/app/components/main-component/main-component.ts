import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule,FormsModule],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})

/* Buenas Juan, he intentado añadir a MainComponent una interface, 
   al igual que utilizar decoradores, pero Angular se queja, imagino
   que estoy cruzando clases, entre la de typeScript y Angular, pero
   entendia que podia utilizarlo sin problema. 
   
interface IMainComponent {

    titulo : string ; 
    imagen : string ; 
    texto : string ;
    fecha : string ; 

}
*/

// export class MainComponent implements IMainComponent{
export class MainComponent {
  titulo = '';
  imagen = '';
  texto = '';
  fecha = '';

  noticias: WritableSignal<Noticia[]> = signal([
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
  ]);

  publicar() {
    if (!this.titulo || !this.imagen || !this.texto || !this.fecha) {
      alert('Por favor, rellena todos los campos');
      return;
    }

    const nuevaNoticia: Noticia = {
      titulo: this.titulo,
      imagen: this.imagen,
      texto: this.texto,
      fecha: this.fecha
    };

    this.noticias.update(noticias => [nuevaNoticia, ...noticias]);

    this.titulo = '';
    this.imagen = '';
    this.texto = '';
    this.fecha = '';
  }
}

// Añado la interface fuera de la clase mainComponent
export interface Noticia {
  titulo: string;
  imagen: string;
  texto: string;
  fecha: string;
}