export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
