import React from 'react';
import bem from 'easy-bem';

import Button from '../button-v2';

import './style.less';


const PageMainHeader = (props) => {
    const b = bem('ooc-page-main-header');

    const {
        title,
        motto,
        actionImgUrl,
        actionTitle,
        showBanner = false,
        actionType = 'link',
        onAction = () => {}
    } = props;

    return (
        <div className={b()}>
            <div className={b('title-wrapper')}>
                <div className={b('title')}>
                    { title }
                </div>
                <div className={b('motto')}>
                    { motto }
                </div>
            </div>
            <div className={b('action-wrapper')}>
                {actionTitle && (
                    <Button type={actionType} onClick={onAction} className={actionType}>
                        <img src={actionImgUrl} alt="" />
                        <span>{ actionTitle }</span>
                    </Button>
                )}
            </div>
            {showBanner && <img className="page-banner" src="/images/page-banner.png" alt="" />}
        </div>
    );
};

export default PageMainHeader;
