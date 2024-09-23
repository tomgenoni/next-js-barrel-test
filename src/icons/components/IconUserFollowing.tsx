import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconUserFollowing: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M20.33 3.67A4.004 4.004 0 0 0 17.5 2.5h-11c-1.07 0-2.07.42-2.83 1.17-.76.75-1.17 1.76-1.17 2.83v11c0 1.07.42 2.07 1.17 2.83.75.76 1.76 1.17 2.83 1.17h7.76l-.38-.38a3.007 3.007 0 0 1-.67-3.2H7.43c0-1.22.47-2.37 1.34-3.23.85-.85 2.03-1.34 3.23-1.34 1.2 0 2.38.49 3.23 1.34.39.39.69.84.91 1.32.56.03 1.1.2 1.55.5l1.45-1.86a3.01 3.01 0 0 1 2.37-1.15v-7a4.056 4.056 0 0 0-1.18-2.83Zm-6.19 7.61c-1.14 1.14-3.13 1.14-4.28 0-.57-.58-.89-1.34-.89-2.14s.32-1.57.89-2.14c.54-.54 1.32-.85 2.14-.85.82 0 1.6.31 2.14.85.57.57.89 1.33.89 2.14s-.32 1.56-.89 2.14Z'
      />
      <path
        fill='currentColor'
        d='M22.11 15.71c-.43-.33-1.08-.25-1.4.18l-2.8 3.6-1.2-1.2c-.38-.38-1.04-.38-1.41 0a.996.996 0 0 0 0 1.41l2 2c.18.19.44.3.7.3h.06c.29-.02.55-.16.73-.38l3.5-4.5c.16-.21.24-.47.2-.74a.962.962 0 0 0-.38-.67Z'
      />
    </svg>
  );
};
export default IconUserFollowing;
