/*
 * @Author: 苦弱机械兔
 * @Date: 2023-11-22 17:34:15
 * @LastEditTime: 2023-11-29 10:38:38
 * 
 */
import { useEffect, useMemo } from 'react';
import { ConfigProvider, ThemeConfig, theme , App as AntdApp } from 'antd'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useGlobalStore } from '@/stores/global';
import './overwrite.css'
import Login from './pages/user/login';
import BasicLayout from './layouts';
import { i18n } from './utils/i18n';
import { router } from './router';

import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';

function App() {

  const { darkMode, lang } = useGlobalStore();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, []);


  console.log(darkMode)

  const curTheme: ThemeConfig = useMemo(() => {

    if (darkMode) {
      return {
        token: {
          colorPrimary: 'rgb(103, 58, 183)',
          // colorBgTextHover: '#f0e9f7',
          // colorBgBase: 'rgb(17, 25, 54)',
          // colorBgLayout: 'rgb(17, 25, 54)',
          colorBgContainer: 'rgb(26, 34, 63)',
          colorBorder: 'rgba(189, 200, 240, 0.157)',
          colorBgTextHover: 'rgba(124, 77, 255, 0.082)',
          colorTextHover: 'rgba(124, 77, 255, 0.082)',
        },
        algorithm: theme.darkAlgorithm,
      }
    } else {
      return {
        token: {
          colorPrimary: 'rgb(103, 58, 183)',
          // colorBgTextHover: '#f0e9f7',
          // colorBgBase: 'rgb(17, 25, 54)',
          // colorBgLayout: 'rgb(17, 25, 54)',
          // colorBgContainer: 'rgb(26, 34, 63)',
          // colorBorder: 'rgba(189, 200, 240, 0.157)',
          // colorText: '#fff',
        },
      }
    }



  }, [darkMode])

  return (
    <ConfigProvider
      theme={curTheme}
      locale={lang === 'zh' ? zhCN : enUS}
      componentSize='large'
    >
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
