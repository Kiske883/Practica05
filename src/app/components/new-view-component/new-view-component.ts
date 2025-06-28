import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-view-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-view-component.html',
  styleUrl: './new-view-component.css'
})
export class NewViewComponent {
  @Input() titulo = '';
  @Input() imagen = '';
  @Input() texto = '';
  @Input() fecha = '';
}