export interface Message {
  text: string;
  sender: 'me' | 'theirs'; 
  timestamp: string;      
}

export interface Chat {
  id: number;
  contactName: string;
  avatar: string;
  status: string;
  messages: Message[];
}