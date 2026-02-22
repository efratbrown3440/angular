import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = signal('my-form-project');

  user = {
    fullName: '',
    age: null,
    email: '',
    isAgreed: false
  };

  userList: any[] = [];

  submitForm() {
    console.log('נרשם משתמש חדש:', this.user);
    this.userList.push({ ...this.user });
    this.user = { fullName: '', age: null, email: '', isAgreed: false };
  }
}
