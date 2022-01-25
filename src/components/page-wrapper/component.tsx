// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import bem from 'easy-bem';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { useMedia } from 'react-use';
import { I18nextProvider } from 'react-i18next';

import { setIsMobile, setDrawerVisible } from 'models/common/actions';
import { reducers } from 'models';
import { NavTop, NavSideMenu } from 'components';
import ScrollToTop from 'components/scroll-to-top';
import i18n from '../../i18n/i18n';
import store from '../../store/store';
import './style.less';


type RootState = ReturnType<typeof reducers>;

const PageWrapperNoProviders = ({
    children,
    isSignedIn,
    navItems,
    photoUrl,
    userName,
    isAuth = false,
    userId,
    onLogout,
    onLogin
}) => {
    const b = bem('page-wrapper');
    const contentRef = useRef();
    const dispatch = useDispatch();
    const drawerVisible = useSelector((state: RootState) => state.common.drawerVisible);
    const isMobile = useSelector((state) => state.common.isMobile);


    return (
        <div className={b()}>
            <Router>
                <NavTop
                    photoUrl={photoUrl}
                    userName={userName}
                    isAuth={isAuth}
                    userId={userId}
                    onLogout={onLogout}
                    onLogin={onLogin}
                />
                <div className={b('container')}>
                    <NavSideMenu
                        isSignedIn={isSignedIn}
                        navItems={navItems}
                    />
                    <div
                        ref={contentRef}
                        className={`${b('content')} ${drawerVisible && !isMobile ? 'nav-drawer-opened' : ''}`}
                    >
                        <ScrollToTop body={contentRef} />
                        { children }
                    </div>
                </div>
            </Router>
        </div>
    );
};

export const PageWrapper = ({ ...rest }) => (
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <PageWrapperNoProviders {...rest} />
        </Provider>
    </I18nextProvider>
);

