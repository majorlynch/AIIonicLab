import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../feature/chat-ai-component/chat-ai-component.component').then((m) => m.ChatAiComponent),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../feature/prompt-ai-component/prompt-ai-component.component').then((m) => m.PromptAiComponentComponent),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../feature/image-read-ai-component/image-read-ai-component.component').then((m) => m.ImageReadAiComponentComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
