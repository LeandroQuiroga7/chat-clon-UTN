import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ChatListComponent } from './components/chat-list/chat-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChatListComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'chat-clon-utn';
}