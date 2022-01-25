import React, { ReactNode } from 'react';
import { ButtonType } from 'antd/lib/button/button';
import './style.less';
interface ButtonProperties {
    type: ButtonType | 'checkbox' | 'download';
    className?: string;
    imgUrl?: string;
    href?: string;
    icon?: ReactNode;
    onClick: () => void;
}
declare const OOCButton: React.FC<ButtonProperties>;
export default OOCButton;
export { OOCButton as Button };
