import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Authority } from '../models/authority';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService implements OnDestroy {

  public list: Authority[] = [];

  private sub: Subscription = new Subscription();

  constructor(private data: DataService) { }

  loadData(): void {
    this.sub = this.data.getAuthorities().subscribe(response => {
      this.list = response;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
