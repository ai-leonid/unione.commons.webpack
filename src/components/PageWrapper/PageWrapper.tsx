// @ts-nocheck
import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import bem from 'easy-bem';
import { I18nextProvider } from 'react-i18next';

import NavTop from '../../components/NavTop';
import NavSideMenu from '../../components/NavSideMenu';
import ScrollToTop from '../../components/ScrollToTop';
import i18n from '../../i18n/i18n';

import './PageWrapper.less';


const PageWrapperNoProviders = ({
  children,
  navItems,
  photoUrl,
  userName,
  userId,
  isAuth = false,
  isMobile = false,
  isSideMenuVisible = true,
  onLogoutClick,
  onLoginClick,
  onMobileBurgerClick,
  onSideMenuBtnClick,
}) => {
  const b = bem('page-wrapper');
  const contentRef = useRef();

  return (
    <div className={b()}>
      <Router>
        <NavTop
          photoUrl={photoUrl}
          userName={userName}
          isAuth={isAuth}
          userId={userId}
          onLogoutClick={onLogoutClick}
          onLoginClick={onLoginClick}
          onMobileBurgerClick={onMobileBurgerClick}
          isMobile={isMobile}
        />
        <div className={b('container')}>
          <NavSideMenu
            navItems={navItems}
            onSideMenuBtnClick={onSideMenuBtnClick}
            isSideMenuVisible={isSideMenuVisible}
            isMobile={isMobile}
            isAuth={isAuth}
          />
          <div
            ref={contentRef}
            className={`${b('content')} ${isSideMenuVisible && !isMobile ? 'nav-drawer-opened' : ''}`}
          >
            <ScrollToTop body={contentRef} />
            {children}
          </div>
        </div>
      </Router>
    </div>
  );
};

const PageWrapper = ({ ...rest }) => (
  <I18nextProvider i18n={i18n}>
    <PageWrapperNoProviders {...rest} />
  </I18nextProvider>
);

export default PageWrapper;
