import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css',
})
export class BotonComponent {
  @Input() texto: string = '';
  @Input() color: string = 'black';
  @Output() onClick = new EventEmitter<void>();
  clicked() {
    this.onClick.emit();
  }
}
