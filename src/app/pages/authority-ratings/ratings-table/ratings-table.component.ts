import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { AuthorityRating } from '../../../core/models/authority-rating';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-ratings-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ratings-table.component.html',
  styleUrl: './ratings-table.component.scss',
})
export class RatingsTableComponent implements OnDestroy {

  @Input() set authorityId(newValue: number) {
    if (newValue < 0) {
      this.ratings = [];
      return;
    }

    this.updateRatings(newValue);
  }

  public ratings: AuthorityRating[] = [];
  public total: number = 0;

  private sub: Subscription = new Subscription();

  constructor(private data: DataService) {}

  updateRatings(authorityId: number):void {
    this.sub = this.data.getAuthorityRatings(authorityId).subscribe(response => {
      this.ratings = [...response];

      this.total = this.ratings.reduce((acc, current) => acc + current.tally, 0);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
