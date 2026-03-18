import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css'
})
export class ChatListComponent {
  chatService = inject(ChatService);
  chats = this.chatService.chats;
}