import { Component } from '@angular/core';

import { AuthoritySelectorComponent } from '../authority-selector/authority-selector.component';
import { RatingsTableComponent } from '../ratings-table/ratings-table.component';

@Component({
  selector: 'app-authority-ratings',
  standalone: true,
  imports: [AuthoritySelectorComponent, RatingsTableComponent],
  templateUrl: './authority-ratings.component.html',
  styleUrl: './authority-ratings.component.scss'
})
export class AuthorityRatingsComponent {
  public authorityId: number = -1;

  authoritySelected(authorityId: number): void {
    this.authorityId = authorityId;
  }
}
