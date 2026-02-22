import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {

  // יצירת פונקציית לוג שמקבלת את שם הפעולה
  log(actionName: string) {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // תאריך
    const formattedTime = now.toLocaleTimeString(); // שעה
    
    // הדפסה משולבת כפי שנדרש בתרגיל
    console.log(`פעולה: ${actionName} | בוצעה בתאריך: ${formattedDate} בשעה: ${formattedTime}`);
  }
}
