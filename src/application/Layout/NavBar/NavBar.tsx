import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom'
import type { MenuProps } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { Paths } from '@/application/paths'
import { Wrapper, Title, Navigation, Menu } from './NavBar.styles';

const items: MenuProps['items'] = [
  {
    label:  <NavLink to={Paths.home}>Home</NavLink>,
    key: 'home',
  },
  {
    label:  <NavLink to={Paths.about}>About</NavLink>,
    key: 'about',
  },
  {
    label:  <NavLink to={Paths.dictionary}>Dictionary</NavLink>,
    key: 'dictionary',
  }
]

export const NavBar = () => {
    const [current, setCurrent] = useState<string[]>(['home']);

    const onClick: MenuClickEventHandler = useCallback((info) => {
        setCurrent([info.key]);
      }, []);

    return (
        <Wrapper>
            <Title>Personal Dictionary</Title>
            <Navigation>
                <Menu
                    onClick={onClick}
                    selectedKeys={current}
                    mode="horizontal"
                    items={items}
                />
            </Navigation>
        </Wrapper>
    )
}