import React from 'react';
import { Modal } from 'antd';
import bem from 'easy-bem';

import './style.less';


const OOCModal = (props) => {
    const b = bem('ooc-modal');
    const {
        className: propsClass,
        visible,
        children,
        closable = false,
        ...rest
    } = props;

    const cn = propsClass ? `${b()} ${propsClass}` : b();

    return (
        <Modal
            className={cn}
            visible={visible}
            closable={closable}
            {...rest}
        >
            {children}
        </Modal>
    );
};

export default OOCModal;
