import React, {MouseEventHandler} from 'react';

const IconButton = ({className, onClick}: IconProps) => {
  return (
    <button className="icon-btn" onClick={onClick}>
      <i className={`${className}`}/>
    </button>
  );
};

interface IconProps {
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default IconButton;
