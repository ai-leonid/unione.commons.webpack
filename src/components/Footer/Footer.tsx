// @ts-nocheck
import React from 'react';
import bem from 'easy-bem';

import { ReactComponent as AttachmentIcon } from '../../assets/icons/commons/attachment.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/commons/location.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/commons/mail.svg';

import './Footer.less';


const Footer = () => {
  const b = bem('common-footer');

  return (
    <footer className={b()}>

      <div className={b('content')}>
        <div className={b('item')}>
          <div className={b('icon')}>
            <AttachmentIcon />
          </div>
          <div className={b('text')}>
            <a href="tel:+78432039253p183">+7 (843) 203 92 53  доб. 183</a>
          </div>
        </div>

        <div className={b('item')}>
          <div className={b('icon')}>
            <LocationIcon />
          </div>
          <div className={b('text')}>
            ул. Университетская, д.1 420500, г. Иннополис
          </div>
        </div>

        <div className={b('item')}>
          <div className={b('icon')}>
            <MailIcon />
          </div>
          <div className={b('text')}>
            <a href="mailto:admissions@innopolis.ru">admissions@innopolis.ru</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

