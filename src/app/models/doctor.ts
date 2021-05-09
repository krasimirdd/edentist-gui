export class Doctor {
  id: number;
  email: string;
  phone: number;
  name: string;
  description: string;
  specialization: string;
  img: string;
  role = 'doctor';

  constructor(id: number, email: string, phone: number, name: string, description: string, specialization: string, img: string) {
    console.log(id, name, email, phone, description, specialization, img);

    this.id = id;
    this.email = email;
    this.phone = phone;
    this.name = name;
    this.description = description;
    this.specialization = specialization;
    this.img = img;
  }
}
