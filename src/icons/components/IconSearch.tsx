import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconSearch: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM2 10.5a8.5 8.5 0 1 1 15.176 5.262l4.48 4.48a1 1 0 0 1-1.413 1.415l-4.481-4.481A8.5 8.5 0 0 1 2 10.5Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconSearch;
