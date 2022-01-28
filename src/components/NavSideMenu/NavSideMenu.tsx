// @ts-nocheck
import React, { useState, FC } from 'react';
import { Divider, Drawer, Menu } from 'antd';
import bem from 'easy-bem';
// import { useLocation, useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/nav/nav-home.svg';
import { ReactComponent as EducationIcon } from '../../assets/icons/nav/nav-education.svg';
import { ReactComponent as MonitoringIcon } from '../../assets/icons/nav/nav-monitoring.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/nav/nav-users.svg';
import { ReactComponent as AboutIcon } from '../../assets/icons/nav/nav-about.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/nav/nav-phone.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/nav/nav-location.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/nav/nav-email.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/nav/nav-arrow.svg';
// import { ReactComponent as AdminLockIcon } from '../../assets/icons/nav/nav-admin-lock.svg';
import { ReactComponent as ComputerIcon } from '../../assets/icons/nav/nav-computer.svg';

import Button from '../Button';

import { NavSubMenu } from './components/NavSubMenu';
import { NavItem } from './components/NavItem';

import './NavSideMenu.less';


const iconsMap = {
  HomeIcon,
  EducationIcon,
  MonitoringIcon,
  UsersIcon,
  AboutIcon,
  PhoneIcon,
  LocationIcon,
  EmailIcon,
  ArrowIcon,
  ComputerIcon
};

const getIcon = (icon) => { const Icon = iconsMap[icon]; return <Icon />; };

interface Props {
  navItems?: object[]
  isAuth?: boolean
  isMobile?: boolean
  isSideMenuVisible?: boolean
  onSideMenuBtnClick?(): any
}

export const NavSideMenu: FC<Props> = ({
  navItems,
  isAuth,
  isMobile,
  isSideMenuVisible,
  onSideMenuBtnClick
}) => {
  const b = bem('nav-side-menu');

  // const location = useLocation();
  const history = useHistory();

  const onSideMenuBtnHandler = (state) => {
    if (onSideMenuBtnClick) {
      onSideMenuBtnClick(state);
    }
  };

  const buildMenu = (items) => items.map((item) => {
    if (item.children && item.children.length > 0) {
      return (
        <NavSubMenu
          key={item.id}
          title={item.translateKey || item.title}
          icon={item.icon && getIcon(item.icon)}
          shouldRender={checkAuthState(item.renderConditionString)}
          isSideMenuVisible={isSideMenuVisible}
          onTitleClick={() => history.push(`/${item.route}`)}
        >
          { buildMenu(item.children) }
        </NavSubMenu>
      );
    }

    return (
      <NavItem
        key={item.id}
        route={item.route}
        label={item.translateKey || item.title}
        icon={item.icon && getIcon(item.icon)}
        shouldRender={checkAuthState(item.renderConditionString)}
      />
    );
  });

  const checkAuthState = (condition: string) => {
    const isAuthorized = condition === 'signedIn' && isAuth;
    const isUnauthorized = condition === 'signedOut' && !isAuth;

    return isAuthorized || isUnauthorized || !condition;
  };
   
  const [selectedKeys] = useState([]);

  return (
    <Drawer
      className={`mobile-nav-drawer ${!isSideMenuVisible ? 'small' : ''}`}
      placement="left"
      mask={isMobile}
      closable={false}
      visible={!isMobile || isSideMenuVisible}
      onClose={() => onSideMenuBtnHandler(false)}
      getContainer={false}
    >
      <div className={b()}>
        <Menu
          className={!isSideMenuVisible ? 'opened' : ''}
          mode="inline"
          theme="dark"
          expandIcon={() => null}
          selectedKeys={selectedKeys}
        >
          { buildMenu(navItems) }
        </Menu>
        <div className="menu-footer">
          {isSideMenuVisible && (
            <div className="contact-list">
              <Button type="link" href="tel:+78005503171" icon={<PhoneIcon />} className="list-item">
                <span>+7 (800) 550-31-71</span>
              </Button>
              <Button
                className="list-item"
                type="link"
                href="mailto:ooc@innopolis.ru"
                icon={<EmailIcon />}
              >
                <span>ooc@innopolis.ru</span>
              </Button>
              <div className="list-item">
                <LocationIcon />
                <span>
                  ул.Университетская, д.1
                  420500, г. Иннополис
                </span>
              </div>
            </div>
          )}
          <Divider />
          <ArrowIcon
            className={`footer-toggle ${!isSideMenuVisible ? 'opened' : ''}`}
            onClick={() => onSideMenuBtnHandler(!isSideMenuVisible)}
          />
        </div>
      </div>
    </Drawer>

  );
};

export default NavSideMenu;
