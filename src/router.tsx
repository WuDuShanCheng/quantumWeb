/*
 * @Author: 苦弱机械兔
 * @Date: 2023-11-23 09:24:44
 * @LastEditTime: 2023-12-02 14:26:26
 * 
 */
import { createHashRouter } from 'react-router-dom';
import { routeConfig } from './config/routes';

import Login from './pages/login';
import BasicLayout from './layouts';
import Result404 from './404';
import { useGlobalStore } from './stores/global';

const router = createHashRouter(
  [
    {
      path: '/user/login',
      Component: Login,
    }, {
      path: '/',
      Component: BasicLayout,
      children: routeConfig,
    }, {
      path: '*',
      Component: Result404,
    }
  ]
);

router.subscribe((state) => {
  const { token } = useGlobalStore.getState();
  if (!token && !(state.historyAction && state.location.pathname === "/user/login")) {
    router.navigate('/user/login');
  }
})

export { router }

