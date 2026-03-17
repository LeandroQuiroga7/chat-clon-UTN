export interface Message {
  text: string;
  sender: 'user' | 'app'; 
  timestamp: Date;
}

export interface Chat {
  id: number;
  contactName: string;
  avatar: string;
  status: string; // online, offline
  messages: Message[];
}