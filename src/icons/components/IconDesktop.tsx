import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconDesktop: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M19.88 3H4.12C2.95 3 2 3.95 2 5.12v10.42c0 1.17.95 2.12 2.12 2.12H11v1.83H8.06c-.55 0-1 .45-1 1s.45 1 1 1h7.7c.55 0 1-.45 1-1s-.45-1-1-1H13v-1.83h6.88c1.17 0 2.12-.95 2.12-2.12V5.12C22 3.95 21.05 3 19.88 3ZM20 15.54c0 .07-.06.12-.12.12H4.12c-.06.01-.12-.05-.12-.12V5.12c0-.06.06-.12.12-.12h15.75c.07 0 .13.06.13.12v10.42Z'
      />
    </svg>
  );
};
export default IconDesktop;
