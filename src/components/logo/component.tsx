import React from 'react';
import bem from 'easy-bem';
import Icon from '@ant-design/icons';

import { ReactComponent as LogoSvg } from './logo-inno-v3.svg';
import './style.less';


const OOCLogo = () => {
    const b = bem('ooc-logo');

    return (
        <div className={b()}>
            <Icon component={LogoSvg} />
        </div>
    );
};

export default OOCLogo;
