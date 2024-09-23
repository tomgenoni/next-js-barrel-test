import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconShareIos: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M7.5 8c.24 0 .47-.08.66-.25L11 5.23v9.52c0 .55.45 1 1 1s1-.45 1-1V5.23l2.84 2.52c.19.17.42.25.66.25.28 0 .55-.11.75-.34a.998.998 0 0 0-.08-1.41l-4.5-4c-.04-.03-.08-.04-.12-.07-.05-.03-.08-.07-.13-.09-.02-.01-.04-.01-.06-.02-.05-.02-.11-.03-.17-.04-.05-.01-.1-.03-.16-.03-.01.01-.02 0-.03 0-.01 0-.02.01-.03.01-.05 0-.1.02-.16.03-.06.01-.11.02-.17.04-.02.01-.04.01-.06.02-.05.02-.09.06-.13.09-.04.03-.09.04-.12.07l-4.5 4c-.41.37-.45 1-.08 1.41.2.22.47.33.75.33Z'
      />
      <path
        fill='currentColor'
        d='M18.5 9H16c-.55 0-1 .45-1 1s.45 1 1 1h1.5v8h-11v-8H8c.55 0 1-.45 1-1s-.45-1-1-1H5.5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h13c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1Z'
      />
    </svg>
  );
};
export default IconShareIos;
