import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconRSS: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M6 21.5C4.07 21.5 2.5 19.93 2.5 18C2.5 16.07 4.07 14.5 6 14.5C7.93 14.5 9.5 16.07 9.5 18C9.5 19.93 7.93 21.5 6 21.5ZM6 16.5C5.17 16.5 4.5 17.17 4.5 18C4.5 18.83 5.17 19.5 6 19.5C6.83 19.5 7.5 18.83 7.5 18C7.5 17.17 6.83 16.5 6 16.5Z'
        fill='currentColor'
      />
      <path
        d='M20.24 21.99C19.69 21.99 19.24 21.54 19.24 20.99C19.24 10.37 13.63 4.76001 3.01 4.76001C2.46 4.76001 2.01 4.31001 2.01 3.76001C2.01 3.21001 2.46 2.76001 3.01 2.76001C14.77 2.76001 21.24 9.23001 21.24 20.99C21.24 21.54 20.79 21.99 20.24 21.99Z'
        fill='currentColor'
      />
      <path
        d='M14.5 22C13.95 22 13.5 21.55 13.5 21C13.5 14.03 9.97 10.5 3 10.5C2.45 10.5 2 10.05 2 9.50001C2 8.95001 2.45 8.50001 3 8.50001C11.06 8.50001 15.5 12.94 15.5 21C15.5 21.55 15.05 22 14.5 22Z'
        fill='currentColor'
      />
    </svg>
  );
};
export default IconRSS;
