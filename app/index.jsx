import React from 'react';
import css from './index.less';

export default function App(props) {
  const handleClick = () => {
    alert('react inspect')
  }

  return (
    <div className={css.app} onClick={handleClick}>
      RS
    </div>
  )
}