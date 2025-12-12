import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { FriendsComponent } from './friends/friends.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'match-history',
    component: MatchHistoryComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  }
];
