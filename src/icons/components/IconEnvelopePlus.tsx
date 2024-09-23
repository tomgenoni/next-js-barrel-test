import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconEnvelopePlus: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M14 18c0-.35.07-.69.18-1H4.5V9.02l6.89 5.27c.18.14.39.21.61.21.22 0 .43-.07.61-.21l6.89-5.27v3.48c.77 0 1.47.29 2 .77V6c0-.55-.45-1-1-1h-17c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10.68c-.11-.31-.18-.65-.18-1Zm4.85-11L12 12.24 5.15 7h13.7Z'
      />
      <path
        fill='currentColor'
        d='M22 17h-1.5v-1.5c0-.55-.45-1-1-1s-1 .45-1 1V17H17c-.55 0-1 .45-1 1s.45 1 1 1h1.5v1.5c0 .55.45 1 1 1s1-.45 1-1V19H22c.55 0 1-.45 1-1s-.45-1-1-1Z'
      />
    </svg>
  );
};
export default IconEnvelopePlus;
