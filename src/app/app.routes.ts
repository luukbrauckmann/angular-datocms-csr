import { Routes } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const staticRoutes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

const paths = [
  'blog',
  'blog/my-first-post',
  'blog/my-second-post',
  'blog/my-third-post',
  'projects',
  'projects/my-first-project',
  'projects/my-second-project',
  'projects/my-third-project',
];

const dynamicRoutes = paths.map((path: string) => ({
  path,
  component: PageComponent,
}));

export const routes: Routes = [...dynamicRoutes, ...staticRoutes];
console.log(routes);
