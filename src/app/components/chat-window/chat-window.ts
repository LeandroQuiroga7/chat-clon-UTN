import { Component, inject, signal, computed, effect } from '@angular/core';
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
  
  
  activeChatId = signal<number | null>(null);


  activeChat = computed(() => {
    const id = this.activeChatId();
    
    return this.chatService.chats().find(c => c.id === id) || null;
  });

  nuevoMensaje = '';

  constructor() {
    
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.activeChatId.set(id); 
      } else {
        this.activeChatId.set(null);
      }
    });

    
    effect(() => {
      if (this.activeChat()) {
        setTimeout(() => {
          this.scrollToBottom();
        }, 50);
      }
    });
  }

  enviarMensaje() {
    const id = this.activeChatId();
    if (!this.nuevoMensaje.trim() || id === null) return;

    
    this.chatService.agregarMensaje(id, this.nuevoMensaje, 'me');
    
    const textoMensaje = this.nuevoMensaje;
    this.nuevoMensaje = ''; 

    
    setTimeout(() => {
      this.chatService.agregarMensaje(
        id, 
        `Recibí tu mensaje: "${textoMensaje}". Soy un bot de prueba. 🤖`, 
        'theirs'
      );
    }, 750); 
  }

  private scrollToBottom(): void {
    const container = document.querySelector('.messages-list');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }
}