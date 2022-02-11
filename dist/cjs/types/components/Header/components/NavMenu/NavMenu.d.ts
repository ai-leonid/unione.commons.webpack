import { FC } from 'react';
import './NavMenu.less';
interface Props {
    items?: any[];
    isAuth?: boolean;
}
declare const NavMenu: FC<Props>;
declare const NavMenuMobile: FC<Props>;
export default NavMenu;
export { NavMenuMobile };
