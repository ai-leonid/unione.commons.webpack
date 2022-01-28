import { FC } from 'react';
import './NavSideMenu.less';
interface Props {
    navItems?: object[];
    isAuth?: boolean;
    isMobile?: boolean;
    isSideMenuVisible?: boolean;
    onSideMenuBtnClick?(): any;
}
export declare const NavSideMenu: FC<Props>;
export default NavSideMenu;
