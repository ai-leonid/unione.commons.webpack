// @ts-nocheck
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import bem from 'easy-bem';
import { useSelector, useDispatch } from 'react-redux';

import { NavProfile, Logo } from '../../components';

import { ReactComponent as BurgerIcon } from '../../assets/icons/burger.svg';

import { setDrawerVisible } from '../../models/common/actions';
import { reducers } from '../../models';

import './NavTop.less';


interface Props {
    photoUrl?: string
    userName?: string
    isAuth?: boolean
    userId: string
    onLogout(): any,
    onLogin(): any,
}

type RootState = ReturnType<typeof reducers>;

const NavTop: FC<Props> = ({
    photoUrl,
    userName,
    isAuth,
    userId,
    onLogout,
    onLogin
}) => {
    const b = bem('nav-top');
    const dispatch = useDispatch();
    const isMobile = useSelector((state: RootState) => state.common.isMobile);

    return (
        <div className={b()}>
            <Link to="/">
                <Logo />
            </Link>
            {isMobile ? <BurgerIcon onClick={() => dispatch(setDrawerVisible(true))} /> : (
                <NavProfile
                    photoUrl={photoUrl}
                    userName={userName}
                    isAuth={isAuth}
                    userId={userId}
                    onLogout={onLogout}
                    onLogin={onLogin}
                />
            )}
        </div>
    );
};


export default NavTop;

