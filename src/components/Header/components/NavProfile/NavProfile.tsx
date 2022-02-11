// @ts-nocheck
import React, { FC } from 'react';
import bem from 'easy-bem';

import UserCalendarIcon from '../../../../assets/icons/user-calendar.svg';
import UserNotificationIcon from '../../../../assets/icons/user-notification.svg';
import EyeIcon from '../../../../assets/icons/eye.svg';
import UserAvatarIcon from '../../../../assets/icons/user-avatar.svg';
import UserLogoutIcon from '../../../../assets/icons/user-logout.svg';

import Button from '../../../Button';

import './NavProfile.less';


interface Props {
  photoUrl?: string
  userName?: string
  userId?: string
  isAuth?: boolean
  onLogout?(): any,
  onLogin?(): any,
}

const NavProfile: FC<Props> = ({
  photoUrl,
  userName,
  userId,
  isAuth = false,
  onLogout,
  onLogin
}) => {
  const b = bem('commons-nav-profile');

  const onLogoutHandler = (e) => {
    if (onLogout) {
      onLogout(e);
    }
  };

  const onLoginHandler = (e) => {
    if (onLogin) {
      onLogin(e);
    }
  };


  return (
    <div className={b()}>
      <div className={b('items')}>
        {isAuth && (
          <div>
            {userName}
          </div>
        )}
      </div>
      <div className={b('wrapper')}>
        {isAuth ? (
          <>
            <a
              href="https://oneid.unionepro.ru"
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
                {userName || ''}
              </div>
            </a>
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
