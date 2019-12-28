export interface Item {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  birthday: Date;
  averageMark: number;
  info?: {
    address: string,
    phone: string,
    login: string,
  };
}
