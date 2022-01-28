// @ts-nocheck
import React, { FC } from 'react';
import bem from 'easy-bem';

import Logo from './components/Logo';
import NavProfile from './components/NavProfile';

import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';

import './NavTop.less';

interface Props {
  photoUrl?: string
  userName?: string
  userId?: string
  isAuth?: boolean
  isMobile?: boolean
  onLogoutClick?(): any
  onLoginClick?(): any
  onMobileBurgerClick?(): any
}

const NavTop: FC<Props> = ({
  photoUrl,
  userName,
  userId,
  isAuth = false,
  isMobile = false,
  onLogoutClick,
  onLoginClick,
  onMobileBurgerClick,
}) => {
  const b = bem('nav-top');

  return (
    <div className={b()}>
      <a href="/">
        <Logo />
      </a>
      {isMobile ? <BurgerIcon onClick={onMobileBurgerClick()} /> : (
        <NavProfile
          photoUrl={photoUrl}
          userName={userName}
          userId={userId}
          isAuth={isAuth}
          onLogout={onLogoutClick}
          onLogin={onLoginClick}
        />
      )}
    </div>
  );
};


export default NavTop;

