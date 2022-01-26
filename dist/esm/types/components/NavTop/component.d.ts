import { FC } from 'react';
import './style.less';
interface Props {
    photoUrl?: string;
    userName?: string;
    isAuth?: boolean;
    userId: string;
    onLogout(): any;
    onLogin(): any;
}
export declare const Component: FC<Props>;
export {};
