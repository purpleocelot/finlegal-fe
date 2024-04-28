import { Routes } from '@angular/router';

import { AuthorityRatingsComponent } from './pages/authority-ratings/authority-ratings/authority-ratings.component';
import { ErrorComponent } from './pages/error/error/error.component';

export const routes: Routes = [
  { path: 'authority-ratings', component: AuthorityRatingsComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/authority-ratings', pathMatch: 'full' },
];
