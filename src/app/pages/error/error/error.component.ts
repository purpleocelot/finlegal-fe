import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

}
