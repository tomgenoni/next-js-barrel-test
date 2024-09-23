import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconArrowBack: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M20 11H5.91l6.79-6.79a.996.996 0 1 0-1.41-1.41l-8.5 8.5c-.06.06-.09.13-.13.2-.03.04-.06.08-.08.13a.91.91 0 0 0-.08.37c0 .03.01.05.01.07.01.1.02.21.06.31.05.13.13.24.22.33l8.49 8.49c.2.2.45.29.71.29.26 0 .51-.1.71-.29a.996.996 0 0 0 0-1.41L5.92 13H20c.55 0 1-.45 1-1s-.45-1-1-1Z'
      />
    </svg>
  );
};
export default IconArrowBack;
