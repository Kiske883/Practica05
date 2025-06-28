import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewViewComponent } from '../new-view-component/new-view-component';
import { INoticiaInterface } from '../../interfaces/inoticia-interface';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule,FormsModule,NewViewComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})

// export class MainComponent implements IMainComponent{
export class MainComponent implements INoticiaInterface {
  
  titulo = '';
  imagen = '';
  texto = '';
  fecha = '';

  defaultImage : string = "https://placehold.co/200x120";

  noticias: WritableSignal<INoticiaInterface[]> = signal([
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

    const nuevaNoticia: INoticiaInterface = {
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