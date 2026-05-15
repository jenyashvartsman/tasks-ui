import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'home',
    renderMode: RenderMode.Server,
  },
  {
    path: 'tasks',
    renderMode: RenderMode.Server,
  },
  {
    path: 'tasks/:id',
    renderMode: RenderMode.Server,
  },
];
