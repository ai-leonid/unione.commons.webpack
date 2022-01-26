import { FC } from 'react';
import './NavTop.less';
interface Props {
    photoUrl?: string;
    userName?: string;
    isAuth?: boolean;
    userId: string;
    onLogout(): any;
    onLogin(): any;
}
declare const NavTop: FC<Props>;
export default NavTop;
