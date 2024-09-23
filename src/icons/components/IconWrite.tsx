import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconWrite: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M19.83 4.18a2.982 2.982 0 0 0-4.21 0L4.99 14.81c-.11.11-.19.24-.24.39l-1.39 4.19a.99.99 0 0 0 .24 1.02 1.007 1.007 0 0 0 1.02.24l4.19-1.4c.15-.05.28-.13.39-.24L19.83 8.39a2.982 2.982 0 0 0 0-4.21Zm-1.42 2.79L7.96 17.43l-1.24.41-.55-.55.41-1.24L17.03 5.59c.38-.38 1-.38 1.38 0 .38.38.38 1 0 1.38Zm2.09 4.53c-.55 0-1 .45-1 1v7h-7c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1Zm-16 0v-7h7c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1Z'
      />
    </svg>
  );
};
export default IconWrite;
