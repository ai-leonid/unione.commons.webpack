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
    isAuth?: boolean
    userId: string
    isMobile: string
    onLogoutClick(): any
    onLoginClick(): any
    onMobileBurgerClick(): any
}


const NavTop: FC<Props> = ({
    photoUrl,
    userName,
    isAuth,
    userId,
    onLogoutClick,
    onLoginClick,
    onMobileBurgerClick,
    isMobile,
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
                    isAuth={isAuth}
                    userId={userId}
                    onLogout={onLogoutClick}
                    onLogin={onLoginClick}
                />
            )}
        </div>
    );
};


export default NavTop;

