// @ts-nocheck
import React, {FC, ReactNode} from 'react';
import bem from 'easy-bem';

import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { NavItem } from './NavItem';

import { ReactComponent as AssesmentIcon } from '../../../../assets/icons/commons/assesment.svg';
import { ReactComponent as UsersIcon } from '../../../../assets/icons/commons/users.svg';
import { ReactComponent as CoursesIcon } from '../../../../assets/icons/commons/courses.svg';
import { ReactComponent as EducationIcon } from '../../../../assets/icons/commons/education.svg';
import { ReactComponent as MonitorIcon } from '../../../../assets/icons/commons/monitor.svg';

import { ReactComponent as CloseIcon } from '../../../../assets/icons/commons/close.svg';

import './NavMenu.less';


const iconsMap = {
  AssesmentIcon,
  UsersIcon,
  CoursesIcon,
  EducationIcon,
  MonitorIcon,
};

const getIcon = (icon) => { const Icon = iconsMap[icon]; return <Icon />; };

const checkAuthState = (condition: string, isAuth: boolean) => {
  const isAuthorized = condition === 'signedIn' && isAuth;
  const isUnauthorized = condition === 'signedOut' && !isAuth;

  return isAuthorized || isUnauthorized || !condition;
};

interface Props {
  items?: any[]
  isAuth?: boolean
}

const NavMenu: FC<Props> = ({
  items,
  isAuth,
}) => {
  const b = bem('commons-nav-menu');

  return (
    <div className={b()}>
      {items.map((item)=> {
        const IconPass = item.icon ? getIcon(item.icon) : getIcon('MonitorIcon');

        return <NavItem
            key={item.id}
            route={item.route}
            className={b('item')}
            isActive={window.location.hostname.includes(item.id)}
            label={/*item.translateKey || */item.title}
            icon={IconPass}
            shouldRender={checkAuthState(item.renderConditionString)}
          />
        }
      )}
    </div>
  );
};


const NavMenuMobile: FC<Props> = ({
    items,
    isAuth,
    onClose,
  }) => {
  const b = bem('commons-nav-mobile-menu');

  const handleBtnClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <nav className={b()}>
      <button className={b('close-btn')}
        onClick={handleBtnClose}>
        <CloseIcon />
      </button>
      <ul className={b('list')}>
        {items && items.map((item)=> {
          const IconPass = item.icon ? getIcon(item.icon) : getIcon('MonitorIcon');
          const iActive = window.location.hostname.includes(item.id);

          return <li>
            <a className={iActive && 'active'} href={item.route}>
              {IconPass}
              <span>{item.title}</span>
            </a>
          </li>
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;

export { NavMenuMobile };
