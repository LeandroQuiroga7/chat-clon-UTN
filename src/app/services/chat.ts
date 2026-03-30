import { Injectable, signal, effect } from '@angular/core'; 
import { Chat, Message } from '../models/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  
  public chats = signal<Chat[]>([
    {
      id: 1,
      contactName: 'Quiroga Leandro',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      status: 'online',
      messages: [
        { 
          text: 'Hola! ¿Como estas?', 
          sender: 'theirs', 
          timestamp: '12:45' 
        }
      ]
    },
    {
      id: 2,
      contactName: 'Leandro Quiroga',
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      status: 'offline',
      messages: []
    }
  ]);

  constructor() {
    
    const savedChats = localStorage.getItem('chat_app_data');
    if (savedChats) {
      try {
        this.chats.set(JSON.parse(savedChats));
      } catch (e) {
        console.error("Error al cargar desde LocalStorage", e);
      }
    }

    
    effect(() => {
      localStorage.setItem('chat_app_data', JSON.stringify(this.chats()));
    });
  }

  agregarMensaje(chatId: number, texto: string, sender: 'me' | 'theirs') {
    const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.chats.update(currentChats => 
      currentChats.map(chat => {
        if (chat.id === chatId) {
          const nuevoMsg: Message = {
            text: texto,
            sender: sender,
            timestamp: hora
          };
          
          return {
            ...chat,
            messages: [...chat.messages, nuevoMsg]
          };
        }
        return chat;
      })
    );
  }

  addChat(nombre: string) {
    const nuevoChat: Chat = {
      id: Date.now(),
      contactName: nombre,
      avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      status: 'online',
      messages: []
    };
    this.chats.update(currentChats => [...currentChats, nuevoChat]);
  }
}