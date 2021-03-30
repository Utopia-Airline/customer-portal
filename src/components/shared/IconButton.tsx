import React, {MouseEventHandler} from 'react';

const IconButton = ({className, onClick, size, secondary}: IconProps) => {
  let fontSize = '1.25rem';
  if (size) {
    if (size === 'sm')
      fontSize = '1.25rem';
    if (size === 'md')
      fontSize = '2.25rem';
    if (size === 'lg')
      fontSize = '3.25rem';
  }
  return (
    <button className={`icon-btn${secondary ? '-secondary' : ''}`} type="button" onClick={onClick}>
      <i className={`${className}`} style={{fontSize: fontSize}}/>
    </button>
  );
};

interface IconProps {
  className: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: string;
  secondary?: boolean;
}

export default IconButton;
