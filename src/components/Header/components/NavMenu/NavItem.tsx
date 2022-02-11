import React, {FC, ReactNode} from 'react';
import bem from 'easy-bem';

// import { useTranslation } from 'react-i18next';

interface PropsNavItem {
  route: string
  label?: string
  className?: string
  icon?: ReactNode
  isActive?: boolean
  shouldRender?: boolean
}

export const NavItem : FC<PropsNavItem> = (props) => {
  const {
    isActive = false,
    shouldRender,
    route,
    label,
    icon,
    className: classNameProp
  } = props;

  const b = bem('commons-nav-menu-item');

  if (shouldRender === false) {
    return null;
  }

  let classes = [b()];

  if (classNameProp) {
    classes.push(...classNameProp.split(' '));
  }

  if (isActive) {
    classes.push(b({ 'active': true }));
    classes.push('active');
  } else {
    classes.push(b({ 'not-active': true }));
    classes.push( 'not-active');
  }

  return (
    <a href={route} className={classes.join(' ')}>
      <span className={b('icon')}>
        {icon && icon}
      </span>
      <span className={b('label')}>{label && label}</span>
    </a>
  );
};
