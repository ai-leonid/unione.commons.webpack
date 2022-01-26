// @ts-nocheck
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import bem from 'easy-bem';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import { reducers } from 'models';
import { NavTop, NavSideMenu, ScrollToTop } from '../../components';
import i18n from '../../i18n/i18n';
import store from '../../store/store';

import './PageWrapper.less';


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

const PageWrapper = ({ ...rest }) => (
    <I18nextProvider i18n={i18n}>
        <Provider store={store}>
            <PageWrapperNoProviders {...rest} />
        </Provider>
    </I18nextProvider>
);

export default PageWrapper;
