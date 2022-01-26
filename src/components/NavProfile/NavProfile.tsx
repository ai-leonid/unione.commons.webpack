import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import bem from 'easy-bem';

import UserCalendarIcon from '../../assets/icons/user-calendar.svg';
import UserNotificationIcon from '../../assets/icons/user-notification.svg';
import EyeIcon from '../../assets/icons/eye.svg';
import UserAvatarIcon from '../../assets/icons/user-avatar.svg';
import UserLogoutIcon from '../../assets/icons/user-logout.svg';

import { Button } from '../../components';

import './NavProfile.less';


declare global {
    interface Window {
        dataLayer: any;
    }
}

interface Props {
    photoUrl?: string
    userName?: string
    isAuth?: boolean
    userId?: string
    onLogout(): any,
    onLogin(): any,
}

const NavProfile: FC<Props> = ({
    photoUrl,
    userName,
    isAuth = false,
    userId,
    onLogout,
    onLogin
}) => {
    const b = bem('nav-profile');

    const onLogoutHandler = () => {
        if (onLogout) {
            onLogout();
        }
    };

    const onLoginHandler = () => {
        if (onLogin) {
            onLogin();
        }
    };

    React.useEffect(() => {
        if (isAuth && userId && Object.prototype.hasOwnProperty.call(window, 'dataLayer')) {
            window.dataLayer.push({ user_id: `${userId}` });
        }
    }, [isAuth, userId]);

    return (
        <div className={b()}>
            <div className={b('items')}>
                {isAuth ? (
                    <>
                        <img src={UserCalendarIcon} alt="" />
                        <img src={UserNotificationIcon} alt="" />
                    </>
                ) : (
                    <>
                        <img src={EyeIcon} alt="" />
                    </>
                )}
            </div>
            <div className={b('wrapper')}>
                {isAuth ? (
                    <>
                        <NavLink
                            to="/personal"
                            className={b('user')}
                        >
                            <div className={b('user-avatar')}>
                                {photoUrl ? (
                                    <img src={photoUrl} alt="" />
                                ) : (
                                    <img src={UserAvatarIcon} alt="" />
                                )}
                            </div>
                            <div className={b('user-name')}>
                                {userName}
                            </div>
                        </NavLink>
                        <Button
                            type="link"
                            className={b('exit-button')}
                            onClick={onLogoutHandler}
                            icon={<img src={UserLogoutIcon} alt="" />}
                        />
                    </>
                ) : (
                    <Button
                        type="link"
                        className={b('exit-button')}
                        onClick={onLoginHandler}
                    >
                        Вход
                    </Button>
                ) }
            </div>
        </div>
    );
};

export default NavProfile;
