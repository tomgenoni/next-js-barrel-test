import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconArrowForward: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M4 13h14.09l-6.79 6.79a.996.996 0 1 0 1.41 1.41l8.5-8.5c.06-.06.09-.13.13-.2.03-.04.06-.08.08-.13a.91.91 0 0 0 .08-.37c0-.03-.01-.05-.01-.07-.01-.1-.02-.21-.06-.31a.955.955 0 0 0-.22-.33L12.72 2.8c-.2-.2-.45-.29-.71-.29-.26 0-.51.1-.71.29a.996.996 0 0 0 0 1.41L18.08 11H4c-.55 0-1 .45-1 1s.45 1 1 1Z'
      />
    </svg>
  );
};
export default IconArrowForward;
