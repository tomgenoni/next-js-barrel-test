import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconMenu: React.FC<IconTypes> = ({ size = 'lg', className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={ICON_SIZE[size]}
      height={ICON_SIZE[size]}
      fill='none'
      viewBox='0 0 24 24'
      style={getInlineIconStyles(size)}
      className={className}
    >
      <path
        fill='currentColor'
        d='M4.5 6.5h15a1 1 0 1 0 0-2h-15a1 1 0 0 0 0 2Zm15 11h-15a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2Zm0-6.5h-15a1 1 0 0 0 0 2h15a1 1 0 1 0 0-2Z'
      />
    </svg>
  );
};
export default IconMenu;
