import React, { memo } from 'react';
import style from "./style";

const Try = memo(({tryInfo}) => {
  return (
    <div style = {style.tryStyle}>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </div>
  );
});

export default Try;