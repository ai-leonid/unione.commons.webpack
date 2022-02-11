import { FC, ReactNode } from 'react';
interface PropsNavItem {
    route: string;
    label?: string;
    className?: string;
    icon?: ReactNode;
    isActive?: boolean;
    shouldRender?: boolean;
}
export declare const NavItem: FC<PropsNavItem>;
export {};
