import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconExternalLink: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M16.5 21H4c-.55 0-1-.45-1-1V7.5c0-.55.45-1 1-1h6.5c.55 0 1 .45 1 1s-.45 1-1 1H5V19h10.5v-5.5c0-.55.45-1 1-1s1 .45 1 1V20c0 .55-.45 1-1 1Z'
      />
      <path
        fill='currentColor'
        d='M12 13c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l6.79-6.79H14.5c-.55 0-1-.45-1-1s.45-1 1-1h6c.13 0 .26.03.38.08.12.03.23.11.33.2.1.09.17.21.21.33.05.12.08.24.08.38v6c0 .55-.45 1-1 1s-1-.45-1-1V5.91l-6.79 6.79c-.2.2-.45.3-.71.3Z'
      />
    </svg>
  );
};
export default IconExternalLink;
