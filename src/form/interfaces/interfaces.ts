
export interface FormValues {
  name: string;
  email: string;
  password1: string;
  password2: string;
  gender: string; // radio group
  hobbies: string[]; // checkbox group
  team: string; // select
  terms: boolean; // checkbox
}