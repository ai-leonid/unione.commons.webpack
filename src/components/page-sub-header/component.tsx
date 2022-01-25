import React from 'react';
import bem from 'easy-bem';

import './style.less';


const PageSubHeader = (props) => {
    const b = bem('ooc-page-sub-header');

    const {
        title,
    } = props;

    return (
        <div className={b()}>
            <div className={b('title')}>
                { title }
            </div>
        </div>
    );
};

export default PageSubHeader;
