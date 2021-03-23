// tslint:disable:variable-name
export class AppointmentRequest {
  timestamp: number;
  p_name: string;
  p_email: string;
  p_phone: string;
  doctorId: number;
  serviceId: number;

  constructor(timestamp: number, p_name: string, p_email: string, p_phone: string, doctorId: number, serviceId: number) {
    this.timestamp = timestamp;
    this.p_name = p_name;
    this.p_email = p_email;
    this.p_phone = p_phone;
    this.doctorId = doctorId;
    this.serviceId = serviceId;
  }
}
