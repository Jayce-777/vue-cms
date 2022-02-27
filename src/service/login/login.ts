import hRequest from '../';

import type { IAccount, IDataType } from './type';

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest<T>(account: IAccount) {
  return hRequest.post<IDataType<T>>({
    url: LoginApi.AccountLogin,
    data: account
  });
}

export function requestUserInfoById<T>(id: number) {
  return hRequest.get<IDataType<T>>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  });
}

export function requestUserMenusByRoleId(id: number) {
  return hRequest.get<IDataType<any>>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  });
}
