import React, { useState } from 'react';
import { Popover } from 'antd';
import css from './index.less';

export default function App(props) {
  const [visible, setVisible] = useState(false);

  return (
    <Popover
      content={<a>Close</a>}
      title="React Tree"
      trigger="click"
      visible={visible}
      onVisibleChange={setVisible}
    >
      <div className={css.app}/*  onClick={handleClick} */>
        RS
      </div>
    </Popover>
  )
}