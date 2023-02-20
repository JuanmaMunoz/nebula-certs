export interface IJwt {
  authOrigin: string;
  email: string;
  exp: number;
  jti: string;
  lvl: string;
  roles: any;
  tuid: string;
  uid: string;
  uuid: string;
}

export interface ISession {
  lvl: string;
  token: string;
}

export interface INavigationEnd {
  id: number;
  url: string;
  urlAfterRedirects: string;
  type: number;
}

export interface ICertificate {
  id: string;
  name: string;
  company: string;
  creationDate: string;
  expDate: string;
  type: string;
}
