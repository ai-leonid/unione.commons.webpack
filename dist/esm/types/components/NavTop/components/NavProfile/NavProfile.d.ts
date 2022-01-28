import { FC } from 'react';
import './NavProfile.less';
declare global {
    interface Window {
        dataLayer: any;
    }
}
interface Props {
    photoUrl?: string;
    userName?: string;
    userId?: string;
    isAuth?: boolean;
    onLogout?(): any;
    onLogin?(): any;
}
declare const NavProfile: FC<Props>;
export default NavProfile;
