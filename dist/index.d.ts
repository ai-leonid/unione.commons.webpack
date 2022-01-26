/// <reference types="react" />
import React, { FC, ReactNode } from 'react';
import { ButtonType } from 'antd/lib/button/button';

interface Props$1 {
    photoUrl?: string;
    userName?: string;
    isAuth?: boolean;
    userId: string;
    onLogout(): any;
    onLogin(): any;
}
declare const NavTop: FC<Props$1>;

declare const NavSideMenu: ({ isSignedIn, navItems }: {
    isSignedIn: any;
    navItems: any;
}) => JSX.Element;

declare global {
    interface Window {
        dataLayer: any;
    }
}
interface Props {
    photoUrl?: string;
    userName?: string;
    isAuth?: boolean;
    userId?: string;
    onLogout(): any;
    onLogin(): any;
}
declare const NavProfile: FC<Props>;

interface ButtonProperties {
    type: ButtonType | 'checkbox' | 'download';
    className?: string;
    imgUrl?: string;
    href?: string;
    icon?: ReactNode;
    onClick: () => void;
}
declare const OOCButton: React.FC<ButtonProperties>;

declare const PageWrapper: ({ ...rest }: {
    [x: string]: any;
}) => JSX.Element;

declare const OOCLogo: () => JSX.Element;

declare const _default: any;

declare const PageSubHeader: (props: any) => JSX.Element;

export { OOCButton as Button, OOCLogo as Logo, NavProfile, NavSideMenu, NavTop, PageSubHeader, PageWrapper, _default as ScrollToTop };
