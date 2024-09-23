import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconArrowUp: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M13 20V5.91l6.79 6.79a.996.996 0 1 0 1.41-1.41l-8.5-8.5c-.06-.06-.13-.09-.2-.13a.567.567 0 0 0-.13-.08.91.91 0 0 0-.37-.08c-.03 0-.05.01-.07.01-.1.01-.21.02-.31.06-.13.05-.24.13-.33.22L2.8 11.28c-.2.2-.29.45-.29.71 0 .26.1.51.29.71.39.39 1.02.39 1.41 0L11 5.92V20c0 .55.45 1 1 1s1-.45 1-1Z'
      />
    </svg>
  );
};
export default IconArrowUp;
