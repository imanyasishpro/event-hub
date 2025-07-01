import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  onLogin() {
    document.getElementById('login-modal')?.classList.add('active');
    document.body.style.overflow = "hidden";
  }

}
