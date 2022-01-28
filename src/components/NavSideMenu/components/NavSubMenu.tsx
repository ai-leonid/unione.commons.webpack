import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';


interface Props {
  title: string
  icon: ReactNode
  isSideMenuVisible?: boolean
  shouldRender?: boolean
  onTitleClick: () => void
}

export const NavSubMenu: FC<Props> = (props) => {
  const { t } = useTranslation('navigation');

  const {
    isSideMenuVisible,
    shouldRender,
    icon,
    title,
    children,
    ...rest
  } = props;


  if (shouldRender === false) {
    return null;
  }

  return (
    <Menu.SubMenu
      icon={icon}
      title={isSideMenuVisible ? t(title) : ''}
      {...rest}
    >
      {isSideMenuVisible && children}
    </Menu.SubMenu>
  );
};

