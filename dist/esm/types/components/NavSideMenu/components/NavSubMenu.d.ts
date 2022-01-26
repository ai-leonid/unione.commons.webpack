import { FC, ReactNode } from 'react';
interface Props {
    title: string;
    icon: ReactNode;
    onTitleClick: () => void;
    shouldRender?: boolean;
}
export declare const NavSubMenu: FC<Props>;
export {};
