import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './chat-form.html',
  styleUrl: './chat-form.css'
})
export class ChatFormComponent {
  chatService = inject(ChatService);
  router = inject(Router);

  
  nuevoChatForm = new FormGroup({
    contactName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
    avatar: new FormControl('https://i.pravatar.cc/150?u=' + Math.random(), [Validators.required])
  });

  agregarChat() {
    
    if (this.nuevoChatForm.valid) {
      const nombre = this.nuevoChatForm.value.contactName ?? '';
      const avatar = this.nuevoChatForm.value.avatar ?? '';

      
      this.chatService.addChat(nombre, avatar);
      
      
      this.router.navigate(['/chats']);
    }
  }
}