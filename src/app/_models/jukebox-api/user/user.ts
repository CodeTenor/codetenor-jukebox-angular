export class User {
  name: string;
  qr_code: string;

  constructor(name: string, qr_code: string) {
    this.name = name;
    this.qr_code = qr_code;
  }
}
