import { ChatAiComponent } from './../feature/chat-ai/chat-ai.component';
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chat',
        loadComponent: () =>
          import('../feature/chat-ai/chat-ai.component').then((m) => m.ChatAiComponent),
      },
      {
        path: 'prompt',
        loadComponent: () =>
          import('../feature/prompt-ai/prompt-ai-component.component').then((m) => m.PromptAiComponent),
      },
      {
        path: 'imageread',
        loadComponent: () =>
          import('../feature/image-read-ai/image-read-ai.component').then((m) => m.ImageReadAiComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/chat',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/chat',
    pathMatch: 'full',
  },
];
