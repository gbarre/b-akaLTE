import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@modules/main/main.component';
import { BlankComponent } from '@pages/blank/blank.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { AccountsComponent } from '@pages/components/accounts/accounts.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'blank',
        component: BlankComponent,
      },
      {
        path: 'accounts',
        component: AccountsComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
