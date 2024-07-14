// requirements.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent {
  constructor(private router: Router) {}

  submitForm(): void {
    this.router.navigate(['/admhome']);
  }
}
