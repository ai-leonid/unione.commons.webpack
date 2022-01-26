import React, { ReactNode } from 'react';
import bem from 'easy-bem';
import { Button, Checkbox } from 'antd';
import { ButtonType } from 'antd/lib/button/button';
import { DownloadOutlined } from '@ant-design/icons';

import './Button.less';


interface ButtonProperties {
    type: ButtonType | 'checkbox' | 'download',
    className?: string,
    imgUrl?: string,
    href?: string,
    icon?: ReactNode,
    onClick: () => void;
}

const OOCButton: React.FC<ButtonProperties> = (props) => {
    const b = bem('ooc-button-v2');
    const {
        className: classNameProp,
        type = 'default',
        imgUrl,
        children,
        ...rest
    } = props;

    if (type === 'checkbox') {
        return (
            <Checkbox
                className={b({ checkbox: true })}
                {...rest}
            >
                {children}
            </Checkbox>
        );
    }

    if (type === 'download') {
        const cn = classNameProp
            ? `${classNameProp} ${b('download')}`
            : `${b('download')}`;

        return (
            <Button className={cn} {...rest}>
                <DownloadOutlined />
            </Button>
        );
    }

    const cn = classNameProp
        ? `${classNameProp} ${b()}`
        : `${b()}`;

    if (type === 'link' && imgUrl) {
        return (
            <div>
                <img src={imgUrl} alt="" />
                <Button className={cn} type={type} {...rest}>
                    {children}
                </Button>
            </div>
        );
    }

    return (
        <Button className={cn} type={type} {...rest}>
            {children}
        </Button>
    );
};

export default OOCButton;
export { OOCButton as Button };
