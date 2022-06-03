export class User {
  _id: string;
  _username: string;
  _password: string;
  _firstName: string;
  _lastName: string;
  _token: string;

  constructor(username: string, password: string) {
    this._id = '0';
    this._username = username;
    this._password = password;
    this._firstName = '';
    this._lastName = '';
    this._token = '';
  }

  public get username() {
    return this._username;
  }

  public set username(newName) {
    this._username = newName;
  }
}
