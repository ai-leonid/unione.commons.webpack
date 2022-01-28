import React from 'react';

import bem from 'easy-bem';

import './style.less';


const OOCMain = () => {
  const b = bem('ooc-main-page');

  return (
    <div className={b()}>
      main test
    </div>
  );
};

export default OOCMain;
