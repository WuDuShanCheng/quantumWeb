/*
 * @Author: 苦弱机械兔
 * @Date: 2023-11-23 20:19:51
 * @LastEditTime: 2023-11-29 11:31:48
 * 
 */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import { Link, useMatches } from 'react-router-dom';

import { MenuItem, routeConfig } from '@/config/routes';
import { useGlobalStore } from '@/stores/global';

const SlideMenu = () => {

  const matches = useMatches();

  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const {
    collapsed,
  } = useGlobalStore();

  useEffect(() => {
    if (collapsed) {
      setOpenKeys([]);
    } else {
      setOpenKeys(matches.map(match => match.pathname));
    }
  }, [
    matches,
    collapsed,
  ]);


  const getMenuTitle = (menu: MenuItem) => {
    if (menu.children) {
      return menu.title;
    }
    return (
      <Link to={menu.path}>{menu.title}</Link>
    );
  }

  const treeMenuData = useCallback((menus: MenuItem[]): ItemType[] => {
    return (menus)
      .filter(o => o.title)
      .map((menu: MenuItem) => {
        return {
          key: menu.path,
          label: getMenuTitle(menu),
          icon: menu.icon,
          children: menu.children ? treeMenuData(menu.children) : null
        };
      })
  }, [])


  const menuData = useMemo(() => {
    return treeMenuData(routeConfig || []);
  }, [treeMenuData]);

  return (
    <Menu
      className='bg-primary'
      mode="inline"
      selectedKeys={matches?.length ? [matches[matches.length-1]?.pathname || ''] : []}
      style={{ height: '100%', borderRight: 0 }}
      items={menuData}
      inlineCollapsed={collapsed}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
    />
  )
}

export default SlideMenu;
