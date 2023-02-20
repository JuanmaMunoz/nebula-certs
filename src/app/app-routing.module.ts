import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './utils/guards/auth.guard';

const routes: Routes = [
  {
    path: 'cert',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cert/list',
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cert/detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
