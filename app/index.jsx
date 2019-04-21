import React, { useState, createRef } from 'react';
import { Popover } from 'antd';
import Panel from './frontend/Panel';
import css from './index.less';

export default function App(props) {
  const buttonRef = createRef();
  const [visible, setVisible] = useState(false);

  return (
    <Popover
      content={<Panel {...props} />}
      title="React Tree"
      trigger="click"
      visible={visible}
      overlayClassName={css.panel}
      getPopupContainer={() => buttonRef.current}
      placement="topLeft"
    >
      <div className={css.app} ref={buttonRef} onClick={() => setVisible(!visible)}>
        RS
      </div>
    </Popover>
  )
}