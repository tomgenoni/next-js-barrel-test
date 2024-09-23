import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconGenericUser: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M19.5 21h-2c0-2.76-2.47-5-5.5-5s-5.5 2.24-5.5 5h-2c0-3.86 3.36-7 7.5-7 4.14 0 7.5 3.14 7.5 7ZM12 13.5A5.51 5.51 0 0 1 6.5 8c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5Zm0-9c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5Z'
      />
    </svg>
  );
};
export default IconGenericUser;
