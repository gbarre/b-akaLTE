import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@modules/main/main.component';
import { BlankComponent } from '@pages/blank/blank.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { AccountsComponent } from '@pages/components/accounts/accounts.component';
import { AppAuthGuard } from './app.authguard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AppAuthGuard],
    children: [
      {
        path: 'blank',
        component: BlankComponent,
        canActivate: [AppAuthGuard],
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        canActivate: [AppAuthGuard],
      },
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AppAuthGuard],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  providers: [AppAuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
