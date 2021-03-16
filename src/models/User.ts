export default class User {
  id: number;
  username: string;
  givenName: string;
  familyName: string;
  email: string;
  phone: string;
  role: {
    id: number;
    name: string;
  };
}
