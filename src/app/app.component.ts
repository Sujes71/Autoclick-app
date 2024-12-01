import { Component, inject } from '@angular/core';
import { AutoclickService } from './autoclick.service';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  requestBody = {
    activated: true,
    title: 'BoomBang',
    mode: 'send_message',
    interval: 0,
    count: 8,
    mouse: {
      activated: false,
      interval: 100,
      count: 13,
      delay: 0,
    },
    move: {
      active: false,
      interval: 500,
    },
  };

  private readonly autoclickSvc = inject(AutoclickService);

  // Inicializamos autoclick$ como un observable vacío
  autoclick$: Observable<any> = of(null);

  // Método que se llama al hacer clic
  startAutoclick() {
    this.autoclick$ = this.autoclickSvc.startAutoclick(this.requestBody);
  }
  
}
