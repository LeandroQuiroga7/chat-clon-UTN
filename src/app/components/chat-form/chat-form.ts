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

  cancelar() {
  this.router.navigate(['/']); 
}
  nuevoChatForm = new FormGroup({
    contactName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    
  });

  agregarChat() {
    
    if (this.nuevoChatForm.valid) {
      const nombre = this.nuevoChatForm.value.contactName ?? '';

      
      this.chatService.addChat(nombre, '');
      
      
      this.router.navigate(['/']);
    }
  }
}