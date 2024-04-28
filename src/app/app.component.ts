import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthorityService } from './core/services/authority.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private authorityService: AuthorityService) {
    this.authorityService.loadData();
  }
}
