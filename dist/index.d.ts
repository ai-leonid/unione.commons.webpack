/// <reference types="react" />
import * as react from 'react';
import { FC } from 'react';
import * as react_router from 'react-router';

interface Props$1 {
    photoUrl?: string;
    userName?: string;
    userId?: string;
    isAuth?: boolean;
    isMobile?: boolean;
    onLogoutClick?(): any;
    onLoginClick?(): any;
    onMobileBurgerClick?(): any;
}
declare const NavTop: FC<Props$1>;

interface Props {
    navItems?: object[];
    isAuth?: boolean;
    isMobile?: boolean;
    isSideMenuVisible?: boolean;
    onSideMenuBtnClick?(): any;
}
declare const NavSideMenu: FC<Props>;

declare const _default: react.ComponentClass<Pick<react_router.RouteComponentProps<any, react_router.StaticContext, unknown>, never>, any> & react_router.WithRouterStatics<react.ComponentType<react_router.RouteComponentProps<any, react_router.StaticContext, unknown>>>;

declare const PageSubHeader: (props: any) => JSX.Element;

declare const PageWrapper: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;

export { NavSideMenu, NavTop, PageSubHeader, PageWrapper, _default as ScrollToTop };
