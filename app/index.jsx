import React, { useState } from 'react';
import { Popover } from 'antd';
import css from './index.less';

export default function App(props) {
  const handleClick = () => {
    alert('react inspect')
  }

  const [visible, setVisible] = useState(false);

  return (
    <Popover
      content={<a>Close</a>}
      title="Title"
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