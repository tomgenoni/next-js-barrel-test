import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconExpand: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        fillRule='evenodd'
        d='M14.5 5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1v5.5a1 1 0 1 1-2 0V6.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L17.586 5H14.5Zm-3.793 8.293a1 1 0 0 1 0 1.414L6.414 19H9.5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1v-5.5a1 1 0 1 1 2 0v3.086l4.293-4.293a1 1 0 0 1 1.414 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconExpand;
