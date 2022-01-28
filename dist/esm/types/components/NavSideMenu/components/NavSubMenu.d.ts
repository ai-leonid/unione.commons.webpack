import { FC, ReactNode } from 'react';
interface Props {
    title: string;
    icon: ReactNode;
    isSideMenuVisible?: boolean;
    shouldRender?: boolean;
    onTitleClick: () => void;
}
export declare const NavSubMenu: FC<Props>;
export {};
