/// <reference types="react" />
import * as react from 'react';
import react__default, { FC, ReactNode } from 'react';
import { ButtonType } from 'antd/lib/button/button';
import * as react_router from 'react-router';

interface Props {
    photoUrl?: string;
    userName?: string;
    isAuth?: boolean;
    userId: string;
    isMobile: string;
    onLogoutClick(): any;
    onLoginClick(): any;
    onMobileBurgerClick(): any;
}
declare const NavTop: FC<Props>;

interface ButtonProperties {
    type: ButtonType | 'checkbox' | 'download';
    className?: string;
    imgUrl?: string;
    href?: string;
    icon?: ReactNode;
    onClick: () => void;
}
declare const Button: react__default.FC<ButtonProperties>;

declare const NavSideMenu: ({ isSignedIn, navItems }: {
    isSignedIn: any;
    navItems: any;
}) => JSX.Element;

declare const PageWrapper: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;

declare const _default: react.ComponentClass<Pick<react_router.RouteComponentProps<any, react_router.StaticContext, unknown>, never>, any> & react_router.WithRouterStatics<react.ComponentType<react_router.RouteComponentProps<any, react_router.StaticContext, unknown>>>;

declare const PageSubHeader: (props: any) => JSX.Element;

export { Button, NavSideMenu, NavTop, PageSubHeader, PageWrapper, _default as ScrollToTop };
