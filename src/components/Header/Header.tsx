// @ts-nocheck
import React, { FC, useState } from 'react';
import bem from 'easy-bem';
import { useMedia } from 'react-use';

import Logo from './components/Logo';
import NavProfile from './components/NavProfile';
import NavMenu, { NavMenuMobile } from './components/NavMenu';

import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/commons/user.svg';

import './Header.less';


const navItemsDefault = [
  {
    id: 'assessment',
    title: 'Ассесмент',
    translateKey: 'assesment',
    icon: 'AssesmentIcon',
    route: 'https://assessment.unionepro.ru',
    renderConditionString: 'signedOut',
  },
  {
    id: 'consrotium',
    title: 'Консорциум',
    translateKey: 'guest',
    icon: 'UsersIcon',
    route: 'https://consrotium.unionepro.ru',
    renderConditionString: 'signedOut',
  },
  {
    id: 'courses',
    title: 'Курсы',
    translateKey: 'courses',
    icon: 'CoursesIcon',
    route: 'https://courses.unionepro.ru',
    renderConditionString: 'signedOut',
  },
  {
    id: 'eprograms',
    title: 'ОПОП и профстандарты',
    translateKey: 'opop-eprograms',
    icon: 'EducationIcon',
    route: 'https://eprograms.unionepro.ru',
    renderConditionString: 'signedOut',
  },
  {
    id: 'apps',
    title: 'Каталог ПО',
    translateKey: 'software-catalog',
    icon: 'MonitorIcon',
    route: 'https://apps.unionepro.ru',
    renderConditionString: 'signedOut',
  },
];

interface Props {
  navItems?: string
  photoUrl?: string
  userName?: string
  userId?: string
  isAuth?: boolean
  isMobile?: boolean
  onLogoutClick?(): any
  onLoginClick?(): any
  onMobileBurgerClick?(): any
}

const Header: FC<Props> = ({
  navItems = navItemsDefault,
  photoUrl,
  userName,
  userId,
  isAuth = false,
  isMobile = useMedia('(max-width: 1340px)'),
  onLogoutClick,
  onLoginClick,
  onMobileBurgerClick,
}) => {
  const b = bem('commons-header');

  const [openedMobile, setOpenedMobile] = useState(false);
  const [fakeAuth, setFakeAuth] = useState(isAuth);

  const handleBurgerClick = () => {
    setOpenedMobile((prev)=>!prev);

    if (onMobileBurgerClick) {
      onMobileBurgerClick(openedMobile);
    }
  }

  const handleFakeAuthClick = () => {
    setFakeAuth((prev)=>!prev);

    if (onLoginClick) {
      onLoginClick(fakeAuth);
    }
  }

  return (
    <>
      <header className={b()}>
        <a href="/">
          <Logo clasName={b('logo')}/>
        </a>

        {!isMobile && <NavMenu items={navItems} isAuth={isAuth} />}

        {!isMobile && !fakeAuth && (
          <NavProfile
            photoUrl={photoUrl}
            userName={userName}
            userId={userId}
            isAuth={fakeAuth}
            onLogout={onLogoutClick}
            onLogin={handleFakeAuthClick}
          />
        )}

        {(!isMobile && fakeAuth) &&
          (<a href="https://oneid.unionepro.ru" className={b('profile-item')}>
            <div className={b('profile-image')}>
              <UserIcon />
            </div>
            <div className={b('profile-name')}>
              Красильников Владимир
            </div>
          </a>)}

        {isMobile && <button className={b('mobile-btn')} onClick={handleBurgerClick}>
          <BurgerIcon />
        </button>}
      </header>
      {openedMobile && <NavMenuMobile onClose={handleBurgerClick} items={navItems} isAuth={isAuth} />}
    </>
  );
};


export default Header;

