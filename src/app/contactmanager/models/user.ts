import { Note } from './note';

export class User {
  id: number;
  avatar: string;
  birthDate: Date;
  name: string;
  bio: string;

  note: Note[] = [];
}
