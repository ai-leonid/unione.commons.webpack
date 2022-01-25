import { FC } from 'react';
import './style.less';
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
export declare const NavProfile: FC<Props>;
export {};
