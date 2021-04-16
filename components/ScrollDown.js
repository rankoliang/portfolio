import { IoIosArrowDown } from 'react-icons/io';
import StyledScrollDown from '../styles/ScrollDown';
import React from 'react';

const ScrollDown = ({ color = 'rgba(255, 255, 255, 0.85)', ...props }, ref) => {
  return (
    <StyledScrollDown {...props} ref={ref}>
      <div className="wrapper">
        <IoIosArrowDown
          size={`${props.size * props.hoverScale}em`}
          className="icon"
          color={color}
        />
      </div>
    </StyledScrollDown>
  );
};

export default React.forwardRef(ScrollDown);
