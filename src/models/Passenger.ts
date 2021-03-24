export default class Passenger {
  id?: number;
  givenName?: string;
  familyName?: string;
  dob?: string;
  gender?: string;
  address?: string;
  editable?: boolean;
  error?: boolean;
  loading?: boolean;

  public constructor(init?: Partial<Passenger>) {
    Object.assign(this, init);
  }
}
