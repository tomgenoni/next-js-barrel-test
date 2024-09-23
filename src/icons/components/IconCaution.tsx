import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCaution: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 10.1c.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1-.61 0-1.1.49-1.1 1.1 0 .61.49 1.1 1.1 1.1Z'
      />
      <path
        fill='currentColor'
        d='M18.55 20.5H5.45c-.52 0-1.04-.14-1.49-.4a3 3 0 0 1-1.41-1.82c-.21-.77-.11-1.58.29-2.28L9.4 4.54a2.997 2.997 0 0 1 5.21 0l6.55 11.47c.26.45.4.97.4 1.49-.01 1.65-1.35 3-3.01 3ZM11.13 5.54 4.58 17c-.13.23-.17.5-.1.76s.24.47.47.61c.15.09.32.13.5.13h13.11c.55 0 1-.45 1-1 0-.17-.05-.34-.13-.5L12.87 5.53a.99.99 0 0 0-1.36-.37c-.16.09-.29.22-.38.38ZM12 17.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1Z'
      />
    </svg>
  );
};
export default IconCaution;
