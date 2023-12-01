/*
 * @Author: 苦弱机械兔
 * @Date: 2023-11-24 11:02:31
 * @LastEditTime: 2023-11-24 14:38:54
 * 
 */
import i18n from "i18next";
import enUS from '@/assets/locales/en-US'
import zhCN from '@/assets/locales/zh-CN'
import { defaultSetting } from '@/default-setting';

i18n
  .init({
    resources: {
      'en': {
        translation: enUS,
      },
      'zh': {
        translation: zhCN,
      },
    },
    lng: defaultSetting.defaultLang || 'zh',
    fallbackLng: defaultSetting.defaultLang || 'zh',
    interpolation: {
      escapeValue: false
    },
  });

export const t = (key: string) => {
  return i18n.t(key) || key;
};

export { i18n };