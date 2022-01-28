// @ts-nocheck
import React, { ReactNode } from 'react';
import bem from 'easy-bem';
import { Button as ButtonAntd, Checkbox } from 'antd';
import { ButtonType } from 'antd/lib/button/button';
import { DownloadOutlined } from '@ant-design/icons';

import './Button.less';


export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <ButtonAntd>{props.label}</ButtonAntd>;
};

export default Button;
