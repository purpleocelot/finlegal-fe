import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { AuthorityService } from '../../../core/services/authority.service';

@Component({
  selector: 'app-authority-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authority-selector.component.html',
  styleUrl: './authority-selector.component.scss'
})
export class AuthoritySelectorComponent {

  @Output() selectedEvent = new EventEmitter<number>();

  constructor(public authorities: AuthorityService) {}

  authorityChange($event: any, authorityId: string): void {
    this.selectedEvent.emit(Number(authorityId));
  }
}
