import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconPlus: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M13 4.5a1 1 0 1 0-2 0V11H4.5a1 1 0 1 0 0 2H11v6.5a1 1 0 1 0 2 0V13h6.5a1 1 0 1 0 0-2H13V4.5Z'
      />
    </svg>
  );
};
export default IconPlus;
