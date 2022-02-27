import { Module } from 'vuex';

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login';
import localCache from '@/utils/cache';
import router from '@/router';

import { IRootState } from '../types';
import { IloginState } from './types';
import { IAccount, ILoginResult, IUserInfo } from '@/service/login/type';

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: IUserInfo) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
    }
  },
  actions: {
    async accountLoginAction(ctx, payload: IAccount) {
      const loginResult = await accountLoginRequest<ILoginResult>(payload);
      const { id, token } = loginResult.data;
      ctx.commit('changeToken', token);
      localCache.setCache('token', token);

      const userInfoResult = await requestUserInfoById<IUserInfo>(id);
      const userInfo = userInfoResult.data;
      ctx.commit('changeUserInfo', userInfo);
      localCache.setCache('userInfo', userInfo);

      const userMenusdata = await requestUserMenusByRoleId(userInfo.role.id);
      const userMenus = userMenusdata.data;
      ctx.commit('changeUserMenus', userMenus);
      localCache.setCache('userMenus', userMenus);

      router.push('/main');
    },
    loadLocalLogin(ctx) {
      const token = localCache.getCache('token');
      if (token) {
        ctx.commit('changeToken', token);
      }

      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        ctx.commit('changeUserInfo', userInfo);
      }

      const userMenus = localCache.getCache('userMenus');
      if (userMenus) {
        ctx.commit('changeUserMenus', userMenus);
      }
    }
  }
};

export default loginModule;
