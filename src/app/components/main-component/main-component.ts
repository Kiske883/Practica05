import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewViewComponent } from '../new-view-component/new-view-component';
import { INoticiaInterface } from '../../interfaces/inoticia-interface';
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'app-main-component',
  imports: [CommonModule, FormsModule, NewViewComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})

// export class MainComponent implements IMainComponent{
export class MainComponent implements INoticiaInterface {

  titulo = '';
  imagen = '';
  texto = '';
  fecha = '';

  formError = signal<string | null>(null);

  // instanciamos service con la directiva inject para poder usarlo
  newsService = inject(NewsService);

  defaultImage: string = "https://placehold.co/200x120";

  noticias: WritableSignal<INoticiaInterface[]> = signal([

    /* Empezamos añadiendo los articulos hardcodeados, lo anulamos ya que al final utilizamos news.db.ts
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
    }*/
  ]);

  noticiasObservable: WritableSignal<INoticiaInterface[]> = signal([]);
  noticiasPromise: WritableSignal<INoticiaInterface[]> = signal([]);

  // Evento que se ejecuta en el momento de cargar el componente
  async ngOnInit() {

    /* Utilizando directamente el fichero de datos 
       this.noticias = this.newsService.getAll();
       Al ser un signal utilizo el set
       this.noticias.set(this.newsService.getAll());
    */

    /* request HTTP con Observable
    this.newsService.getAllUserObservable().subscribe( (data) => {
      this.noticias.set(data);
    })
    */

    /* request HTTP con Promise */
    this.noticias.set(await this.newsService.getAllNewPromise());

  }

  publicar() {

    const formErrors = [];

    // Inicializo formError, para que no se quede siempre mostrando errores
    this.formError.set(null);

    if (!this.titulo) formErrors.push('título');
    if (!this.imagen) formErrors.push('imagen');
    if (!this.texto) formErrors.push('texto');
    if (!this.fecha) formErrors.push('fecha');

    if (formErrors.length > 0) {
      this.formError.set(`Por favor, rellena los siguientes campos: ${formErrors.join(', ')}`);
      return;
    } 

    const nuevaNoticia: INoticiaInterface = {
      titulo: this.titulo,
      imagen: this.imagen,
      texto: this.texto,
      fecha: this.fecha
    };

    // this.noticias.update(noticias => [nuevaNoticia, ...noticias]);
    this.newsService.insert(nuevaNoticia);

    this.titulo = '';
    this.imagen = '';
    this.texto = '';
    this.fecha = '';
  }
}