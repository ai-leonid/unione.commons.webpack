// @ts-nocheck
import React from 'react';

import { ReactComponent as LogoSvg } from '../../../../assets/icons/commons/logo-innopolis-unione.svg';

import './Logo.less';


const Logo = ({ clasName }) => (
  <div className={clasName}>
    <LogoSvg />
  </div>
);

export default Logo;
