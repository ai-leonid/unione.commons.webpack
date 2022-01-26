import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'antd';
import { useSelector } from '../../../store/use-selector';


interface Props {
    title: string
    icon: ReactNode
    onTitleClick: () => void
    shouldRender?: boolean
}

export const NavSubMenu: FC<Props> = (props) => {
    const { t } = useTranslation('navigation');

    const drawerVisible = useSelector((state) => state.common.drawerVisible);
    const {
        shouldRender,
        icon,
        title,
        children,
        ...rest
    } = props;


    if (shouldRender === false) {
        return null;
    }

    return (
        <Menu.SubMenu
            icon={icon}
            title={drawerVisible ? t(title) : ''}
            {...rest}
        >
            {drawerVisible && children}
        </Menu.SubMenu>
    );
};

