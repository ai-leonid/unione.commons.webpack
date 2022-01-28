import { FC } from 'react';
import './NavTop.less';
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
export default NavTop;
