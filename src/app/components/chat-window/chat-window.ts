import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-window.html',
  styleUrl: './chat-window.css'
})
export class ChatWindowComponent {
  private route = inject(ActivatedRoute);
  chatService = inject(ChatService);
  
  activeChat = signal<any>(null);
  nuevoMensaje = '';

  constructor() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = +params['id'];
        const chat = this.chatService.chats().find(c => c.id === id);
        this.activeChat.set(chat);
        console.log('Chat cargado:', chat);
      } else {
        this.activeChat.set(null);
      }
    });
  }

  enviarMensaje() {
    if (!this.nuevoMensaje.trim()) return;
    console.log('Enviando:', this.nuevoMensaje);
    this.nuevoMensaje = '';
  }
}