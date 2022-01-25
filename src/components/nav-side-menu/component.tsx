import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Divider, Drawer, Menu } from 'antd';
import bem from 'easy-bem';
// import { useLocation, useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useMedia } from 'react-use';

import { ReactComponent as HomeIcon } from 'assets/icons/nav/nav-home.svg';
import { ReactComponent as EducationIcon } from 'assets/icons/nav/nav-education.svg';
import { ReactComponent as MonitoringIcon } from 'assets/icons/nav/nav-monitoring.svg';
import { ReactComponent as UsersIcon } from 'assets/icons/nav/nav-users.svg';
import { ReactComponent as AboutIcon } from 'assets/icons/nav/nav-about.svg';
import { ReactComponent as PhoneIcon } from 'assets/icons/nav/nav-phone.svg';
import { ReactComponent as LocationIcon } from 'assets/icons/nav/nav-location.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/nav/nav-email.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/nav/nav-arrow.svg';
// import { ReactComponent as AdminLockIcon } from 'assets/icons/nav/nav-admin-lock.svg';
import { ReactComponent as ComputerIcon } from 'assets/icons/nav/nav-computer.svg';


import { setDrawerVisible, setIsMobile } from 'models/common/actions';
import { ButtonV2 } from 'components';
import { useSelector } from 'store/use-selector';

import { NavSubMenu } from './components/NavSubMenu';
import { NavItem } from './components/NavItem';

import './style.less';


const iconsMap = {
    HomeIcon,
    EducationIcon,
    MonitoringIcon,
    UsersIcon,
    AboutIcon,
    PhoneIcon,
    LocationIcon,
    EmailIcon,
    ArrowIcon,
    ComputerIcon
};

const getIcon = (icon) => { const Icon = iconsMap[icon]; return <Icon />; };

export const NavSideMenu = ({ isSignedIn, navItems }) => {
    const b = bem('nav-side-menu');

    // const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    
    const drawerVisible = useSelector((state) => state.common.drawerVisible);
    const isMobile = useSelector((state) => state.common.isMobile);

    const isMobileQuery = useMedia('(max-width: 756px)');

    // @ts-ignore
    useEffect(() => dispatch(setIsMobile(isMobileQuery)), [isMobileQuery, dispatch]);

    const buildMenu = (items) => items.map((item) => {
        if (item.children && item.children.length > 0) {
            return (
                <NavSubMenu
                    key={item.id}
                    title={item.translateKey || item.title}
                    icon={item.icon && getIcon(item.icon)}
                    shouldRender={checkAuthState(item.renderConditionString)}
                    onTitleClick={() => history.push(`/${item.route}`)}
                >
                    { buildMenu(item.children) }
                </NavSubMenu>
            );
        }

        return (
            <NavItem
                key={item.id}
                route={item.route}
                label={item.translateKey || item.title}
                icon={item.icon && getIcon(item.icon)}
                shouldRender={checkAuthState(item.renderConditionString)}
            />
        );
    });

    const checkAuthState = (condition: string) => {
        const isAuthorized = condition === 'signedIn' && isSignedIn;
        const isUnauthorized = condition === 'signedOut' && !isSignedIn;

        return isAuthorized || isUnauthorized || !condition;
    };
   
    const [selectedKeys] = useState([]);
    
    useEffect(() => {
        if (isMobile) {
            dispatch(setDrawerVisible(!isMobile));
        }
    }, [isMobile, dispatch]);

    return (
        <Drawer
            className={`mobile-nav-drawer ${!drawerVisible ? 'small' : ''}`}
            placement="left"
            mask={isMobile}
            closable={false}
            visible={!isMobile || drawerVisible}
            onClose={() => dispatch(setDrawerVisible(false))}
            getContainer={false}
        >
            <div className={b()}>
                <Menu
                    className={!drawerVisible ? 'opened' : ''}
                    mode="inline"
                    theme="dark"
                    expandIcon={() => null}
                    selectedKeys={selectedKeys}
                >

                    { buildMenu(navItems) }
                </Menu>
                <div className="menu-footer">
                    {drawerVisible && (
                        <div className="contact-list">
                            <ButtonV2 type="link" href="tel:+78005503171" icon={<PhoneIcon />} className="list-item">
                                <span>+7 (800) 550-31-71</span>
                            </ButtonV2>
                            <ButtonV2
                                className="list-item"
                                type="link"
                                href="mailto:ooc@innopolis.ru"
                                icon={<EmailIcon />}
                            >
                                <span>ooc@innopolis.ru </span>
                            </ButtonV2>
                            <div className="list-item">
                                <LocationIcon />
                                <span>
                                    ул.Университетская, д.1
                                    420500, г. Иннополис
                                </span>
                            </div>
                        </div>
                    )}
                    <Divider />
                    <ArrowIcon
                        className={`footer-toggle ${!drawerVisible ? 'opened' : ''}`}
                        onClick={() => dispatch(setDrawerVisible(!drawerVisible))}
                    />
                </div>
            </div>
        </Drawer>

    );
};
