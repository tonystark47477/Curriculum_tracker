import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Predefined admin credentials
    const adminUsername = 'admin';
    const adminPassword = 'password';

    // Check if entered credentials match admin credentials
    if (this.username === adminUsername && this.password === adminPassword) {
      // Redirect to the requirements module
      this.router.navigate(['/admhome']);
    } else {
      // Show alert message for invalid credentials
      alert('Invalid username or password. Please try again.');
    }
  }
}
