import { IoIosArrowDown } from 'react-icons/io';
import StyledScrollDown from '../styles/ScrollDown';
import React from 'react';

const ScrollDown = (props, ref) => {
  return (
    <StyledScrollDown {...props} ref={ref}>
      <div className="wrapper">
        <IoIosArrowDown className="icon" color="rgba(255, 255, 255, 0.85)" />
      </div>
    </StyledScrollDown>
  );
};

export default React.forwardRef(ScrollDown);
