import React from 'react';
import { Tooltip } from 'antd';
import bem from 'easy-bem';

import './style.less';


const OOCTooltip = ({ children, ...rest }) => {
    const b = bem('ooc-tooltip');

    return (
        <Tooltip
            overlayClassName={b()}
            arrowPointAtCenter
            {...rest}
        >
            {children}
        </Tooltip>
    );
};

export default OOCTooltip;
