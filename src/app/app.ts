import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ChatListComponent } from './components/chat-list/chat-list';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChatListComponent, CommonModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'chat-clon-utn';
  router = inject(Router);

  
  esChatSeleccionado(): boolean {
    return this.router.url.includes('/chats/');
  }
}