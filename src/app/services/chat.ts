import { Injectable, signal } from '@angular/core';
import { Chat } from '../models/chat.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
 
  public chats = signal<Chat[]>([
    {
      id: 1,
      contactName: 'Quiroga',
      avatar: 'https://i.pravatar.cc/150?u=aiden',
      status: 'online',
      messages: [
        { text: 'Hola! ¿Como estas?', sender: 'app', timestamp: new Date() }
      ]
    },
    {
      id: 2,
      contactName: 'Leandro',
      avatar: 'https://i.pravatar.cc/150?u=vincent',
      status: 'offline',
      messages: []
    }
  ]);

  constructor() {}

  
  getChatById(id: number) {
    return this.chats().find(c => c.id === id);
  }

  addChat(nombre: string, avatar: string) {
  
  const nuevoChat = {
    id: Date.now(), 
    contactName: nombre,
    avatar: avatar,
    status: 'online', 
    messages: [] 
  };


  this.chats.update(currentChats => [...currentChats, nuevoChat]);
}
}