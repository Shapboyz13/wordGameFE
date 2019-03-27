import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnonymousGuard } from './auth/anonymous.guard';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		component: AuthComponent,
		canActivate : [AnonymousGuard]
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate : [AuthGuard]
	},

	//if no path or wrong path is given
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', redirectTo: '/login' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
