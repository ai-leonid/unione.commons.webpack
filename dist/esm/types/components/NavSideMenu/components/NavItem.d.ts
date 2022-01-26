import { FC, ReactNode } from 'react';
interface Props {
    title?: string;
    icon?: ReactNode;
    route: string;
    label?: string;
    shouldRender?: boolean;
}
export declare const NavItem: FC<Props>;
export {};
