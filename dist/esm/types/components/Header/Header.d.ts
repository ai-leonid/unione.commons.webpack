import { FC } from 'react';
import './Header.less';
interface Props {
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
declare const Header: FC<Props>;
export default Header;
