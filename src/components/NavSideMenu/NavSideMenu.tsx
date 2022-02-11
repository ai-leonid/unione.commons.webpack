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


const navItemsDefault = [
  {
    id: 'k1',
    title: 'main',
    translateKey: '',
    type: 'item',
    icon: 'HomeIcon',
    route: '',
    renderConditionString: 'signedIn',
    children: [],
  },
  {
    id: 'k6',
    title: 'guest',
    translateKey: 'guest',
    type: 'group',
    icon: 'AboutIcon',
    route: 'guest',
    renderConditionString: 'signedOut',
    children: [],
  },
  {
    id: 'k2',
    title: 'courses',
    translateKey: '',
    type: 'item',
    icon: 'EducationIcon',
    route: 'courses',
    renderConditionString: 'signedIn',
  },
  {
    id: 'k3',
    title: 'educational-control',
    translateKey: 'educational-control',
    type: 'group',
    icon: 'MonitoringIcon',
    route: 'education-apps',
    renderConditionString: 'signedIn',
    children: [
      {
        id: 'k31',
        title: 'education-apps',
        translateKey: 'education-apps',
        type: 'item',
        route: 'education-apps',
        renderConditionString: 'signedIn',
      },
      {
        id: 'k32',
        title: 'my-staff',
        translateKey: 'my-staff',
        type: 'item',
        route: 'my-staff',
        renderConditionString: 'signedIn',
      }
    ],
  },
  {
    id: 'k4',
    title: 'consortium',
    translateKey: '',
    type: 'group',
    icon: 'AboutIcon',
    route: 'consortium',
    renderConditionString: 'signedIn',
    children: [
      {
        id: 'k41',
        title: 'consortium-participants',
        translateKey: 'consortium-participants',
        type: 'item',
        route: 'consortium-participants',
        renderConditionString: 'signedIn',
      }
    ],
  },
  /* {
        id: 'k5',
        title: 'administration',
        translateKey: 'administration',
        type: 'group',
        icon: 'AdminLockIcon',
        route: 'administration',
        renderConditionString: 'Administrator',
        children: [
            {
                id: 'k51',
                title: 'admin-users',
                translateKey: 'users',
                type: 'item',
                route: 'admin-users',
                renderConditionString: 'Administrator',
            },
            {
                id: 'k52',
                title: 'admin-users',
                translateKey: 'applications',
                type: 'item',
                route: 'admin-apps',
                renderConditionString: 'Administrator',
            },
            {
                id: 'k53',
                title: 'admin-roles',
                translateKey: 'roles',
                type: 'item',
                route: 'admin-roles',
                renderConditionString: 'Administrator',
            }
        ],
    }, */
  {
    id: 'k7',
    title: 'consortium',
    translateKey: 'consortium',
    type: 'item',
    icon: 'UsersIcon',
    route: 'consortium',
    renderConditionString: 'signedOut',
  },
  {
    id: 'k8',
    title: 'training',
    translateKey: 'training',
    type: 'item',
    icon: 'EducationIcon',
    route: 'training',
    renderConditionString: 'signedOut',
  },
  {
    id: 'k9',
    title: 'actualization',
    translateKey: 'actualization',
    type: 'item',
    icon: 'MonitoringIcon',
    route: 'actualization',
    renderConditionString: 'signedOut',
  },
  {
    id: 'k10',
    title: 'software-catalog',
    translateKey: 'software-catalog',
    type: 'item',
    icon: 'ComputerIcon',
    route: 'software-catalog',
    renderConditionString: 'signedOut',
  },
  {
    id: 'k11',
    title: 'educational-programs',
    translateKey: 'educational-programs',
    type: 'item',
    icon: 'EducationIcon',
    route: 'opop-constructor',
    renderConditionString: 'signedIn',
    children: [
      {
        id: 'k57',
        title: 'opop-constructor',
        translateKey: 'opop-constructor',
        type: 'item',
        route: 'opop-constructor',
        renderConditionString: 'signedIn',
      }
    ],
  },
];

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
  navItems = navItemsDefault,
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
