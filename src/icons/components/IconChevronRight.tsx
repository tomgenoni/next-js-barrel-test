import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconChevronRight: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M8.38 2.5c.26 0 .51.1.71.29l8.5 8.5c.39.39.39 1.02 0 1.41l-8.5 8.5a.996.996 0 1 1-1.41-1.41L15.46 12 7.67 4.2a.996.996 0 0 1 0-1.41c.2-.19.45-.29.71-.29Z'
      />
    </svg>
  );
};
export default IconChevronRight;
