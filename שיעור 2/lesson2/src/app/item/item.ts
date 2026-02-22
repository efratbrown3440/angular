import { Component, Input, Output, EventEmitter } from '@angular/core';
import { item } from '../models/item';


@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
@Input() chiledItem: item = new item(0,'',0,0);
@Output() deleteRequest = new EventEmitter<number>();


onDeleteClick() {
    this.deleteRequest.emit(this.chiledItem.id);
    }
}