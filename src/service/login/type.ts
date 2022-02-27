interface IAccount {
  name: string;
  password: string;
}

interface IDataType<T = any> {
  code: number;
  data: T;
}

interface ILoginResult {
  id: number;
  name: string;
  token: string;
}

interface Role {
  id: number;
  name: string;
  intro: string;
  createAt: Date;
  updateAt: Date;
}

interface Department {
  id: number;
  name: string;
  parentId?: any;
  createAt: Date;
  updateAt: Date;
  leader: string;
}

interface IUserInfo {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  createAt: Date;
  updateAt: Date;
  role: Role;
  department: Department;
}

export { IAccount, IDataType, ILoginResult, IUserInfo };
