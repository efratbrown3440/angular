import { Component } from '@angular/core';
import { item } from '../models/item'; // ייבוא המודל
import { Item } from '../item/item';
import { Logger } from '../services/logger';
@Component({
  selector: 'app-item-list',
  imports: [Item],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {
  
items: item[] = [];

  ngOnInit() {
    // יצירת מוצרים לדוגמה כפי שעשיתם בכיתה
    this.items.push(new item(1, 'מחשב נייד', 3500, 5));
    this.items.push(new item(2, 'עכבר אלחוטי', 120, 10));
    this.items.push(new item(3, 'מקלדת מכנית', 450, 3));
        this.logger.log('רכיב רשימת המוצרים עלה למסך'); // שימוש בשירות

  }

  constructor(private logger: Logger) {}

 
  
  // אפשר להשתמש בזה גם בפונקציות אחרות
  deleteItem(id: number) {
    this.logger.log(`המוצר עם מזהה ${id} נמחק`);

    this.items = this.items.filter(i => i.id !== id);
}
}