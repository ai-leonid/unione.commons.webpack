// @ts-nocheck
import React, { ReactNode } from 'react';
import bem from 'easy-bem';
import { Button as ButtonAntd } from 'antd';
import { ButtonType } from 'antd/lib/button/button';

import './Button.less';


interface ButtonProperties {
    type: ButtonType | 'checkbox' | 'download',
    className?: string,
    imgUrl?: string,
    href?: string,
    icon?: ReactNode,
    onClick: () => void;
}

const Button: React.FC<ButtonProperties> = (props) => {
  const b = bem('ooc-button-v2');
  const {
    className: classNameProp,
    type = 'default',
    imgUrl,
    children,
    ...rest
  } = props;

  const cn = classNameProp
    ? `${classNameProp} ${b()}`
    : `${b()}`;


  return (
    <ButtonAntd className={cn} type={type} {...rest}>
      {children}
    </ButtonAntd>
  );
};

export default Button;
