import React from 'react';
import { Modal } from 'antd';
import bem from 'easy-bem';

import './style.less';


const OOCModal = (props) => {
    const b = bem('ooc-modal');
    const {
        className: propsClass,
        children,
        closable = false,
        ...rest
    } = props;

    const cn = propsClass ? `${b()} ${propsClass}` : b();

    return (
        <Modal
            className={cn}
            closable={closable}
            {...rest}
        >
            {children}
        </Modal>
    );
};

export default OOCModal;
