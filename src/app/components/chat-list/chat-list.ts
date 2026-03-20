import { Component, inject, signal, computed } from '@angular/core';
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
 
  searchTerm = signal('');

  
  filteredChats = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.chatService.chats().filter(chat => 
      chat.contactName.toLowerCase().includes(term)
    );
  });

  
  onSearch(event: Event) {
    const element = event.target as HTMLInputElement;
    this.searchTerm.set(element.value);
  }
}