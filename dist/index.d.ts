/// <reference types="react" />
import { FC } from 'react';

interface Props$2 {
    photoUrl?: string;
    userName?: string;
    userId?: string;
    isAuth?: boolean;
    isMobile?: boolean;
    onLogoutClick?(): any;
    onLoginClick?(): any;
    onMobileBurgerClick?(): any;
}
declare const NavTop: FC<Props$2>;

interface Props$1 {
    navItems?: string;
    photoUrl?: string;
    userName?: string;
    userId?: string;
    isAuth?: boolean;
    isMobile?: boolean;
    onLogoutClick?(): any;
    onLoginClick?(): any;
    onMobileBurgerClick?(): any;
}
declare const Header: FC<Props$1>;

declare const Footer: () => JSX.Element;

interface Props {
    navItems?: object[];
    isAuth?: boolean;
    isMobile?: boolean;
    isSideMenuVisible?: boolean;
    onSideMenuBtnClick?(): any;
}
declare const NavSideMenu: FC<Props>;

declare const PageSubHeader: (props: any) => JSX.Element;

export { Footer, Header, NavSideMenu, NavTop, PageSubHeader };
