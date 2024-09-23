import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconArrowDown: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M11 4v14.09L4.21 11.3a.996.996 0 1 0-1.41 1.41l8.5 8.5c.06.06.13.09.2.13.04.03.08.06.13.08.11.05.24.08.37.08.03 0 .05-.01.07-.01.1-.01.21-.02.31-.06.13-.05.24-.13.33-.22l8.49-8.49c.2-.2.29-.45.29-.71 0-.26-.1-.51-.29-.71a.996.996 0 0 0-1.41 0L13 18.08V4c0-.55-.45-1-1-1s-1 .45-1 1Z'
      />
    </svg>
  );
};
export default IconArrowDown;
