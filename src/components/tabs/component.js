import React from 'react';
import { Tabs } from 'antd';
import bem from 'easy-bem';

import './style.less';


const OOCTabs = (props) => {
    const b = bem('ooc-tabs');

    const { children, ...rest } = props;

    return (
        <Tabs className={b()} {...rest}>
            {children}
        </Tabs>
    );
};

export default OOCTabs;


export const OOCTabPane = (props) => {
    const { children, ...rest } = props;

    return (
        <Tabs.TabPane {...rest}>
            {children}
        </Tabs.TabPane>
    );
};
