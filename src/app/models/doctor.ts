export class Doctor {
  id: number;
  email: string;
  phone: number;
  name: string;
  role = 'doctor';

  constructor(id: number, email: string, phone: number, name: string) {
    console.log(id, name, email, phone);

    this.id = id;
    this.email = email;
    this.phone = phone;
    this.name = name;
  }
}
