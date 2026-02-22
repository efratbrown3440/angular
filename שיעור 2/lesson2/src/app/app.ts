import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemList } from './item-list/item-list';
import { Logger } from './services/logger';
@Component({
  selector: 'app-root',
  imports: [ItemList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson2');
  
  show: boolean = false;

  showComponents(){
    this.show = !this.show;
  }
}
