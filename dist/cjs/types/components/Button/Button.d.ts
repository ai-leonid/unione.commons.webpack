import React, { ReactNode } from 'react';
import { ButtonType } from 'antd/lib/button/button';
import './Button.less';
interface ButtonProperties {
    type: ButtonType | 'checkbox' | 'download';
    className?: string;
    imgUrl?: string;
    href?: string;
    icon?: ReactNode;
    onClick: () => void;
}
declare const Button: React.FC<ButtonProperties>;
export default Button;
