import { FC } from 'react';
import './NavTop.less';
interface Props {
    photoUrl?: string;
    userName?: string;
    userId?: string;
    isAuth?: boolean;
    isMobile?: boolean;
    onLogoutClick?(): any;
    onLoginClick?(): any;
    onMobileBurgerClick?(): any;
}
declare const NavTop: FC<Props>;
export default NavTop;
