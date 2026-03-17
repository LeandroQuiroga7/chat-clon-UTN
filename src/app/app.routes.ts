import { Routes } from '@angular/router';
import { ChatListComponent } from './components/chat-list/chat-list';
import { ChatWindowComponent } from './components/chat-window/chat-window';
import { ChatFormComponent } from './components/chat-form/chat-form';

export const routes: Routes = [
  { path: 'chats', component: ChatListComponent },
  { path: 'chats/:id', component: ChatWindowComponent },
  { path: 'nuevo', component: ChatFormComponent },
  { path: '', redirectTo: 'chats', pathMatch: 'full' }
];