import React, { FC, ReactNode } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';


interface Props {
    title?: string
    icon?: ReactNode
    route: string
    label?: string
    shouldRender?: boolean
}

export const NavItem : FC<Props> = (props) => {
    const { t } = useTranslation('navigation');
    const { pathname } = useLocation();

    const {
        shouldRender,
        route,
        label,
        icon,
        ...rest
    } = props;


    if (shouldRender === false) {
        return null;
    }

    return (
        <Menu.Item
            className={pathname === `/${route}` ? 'page-selected' : ''}
            {...rest}
        >
            <NavLink className="item-link" to={`/${route}`}>
                {icon}
                <span>{t(label || route)}</span>
            </NavLink>
        </Menu.Item>

    );
};
