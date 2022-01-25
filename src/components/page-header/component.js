import React from 'react';
import { PageHeader as PageHeaderAntd } from 'antd';
import bem from 'easy-bem';

import Button from '../button-v2';

import './style.less';

/**
 * Custom header for pages
 * @version 3
 *
 * @param {{ onBack: function, title: string, subTitle: string }} props
 * @returns ReactNode
 */
const PageHeader = (props) => {
    const b = bem('ooc-page-header');

    const {
        onBack = null,
        title,
        subTitle,
        actionTitle,
        onAction = () => {}
    } = props;

    const getActionLabel = () => (
        <div className={b('action-title')}>
            <Button type="link" onClick={onAction}>
                { actionTitle }
            </Button>
        </div>
    );

    return (
        <div className={b()}>
            <PageHeaderAntd
                onBack={onBack}
                title={title}
                subTitle={subTitle}
            />
            { actionTitle && getActionLabel() }
        </div>
    );
};

export default PageHeader;
