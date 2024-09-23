import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconLock: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M17.5 10H17V8c0-2.757-2.243-5-5-5S7 5.243 7 8v2h-.5A2.502 2.502 0 0 0 4 12.5v6C4 19.879 5.121 21 6.5 21h11c1.379 0 2.5-1.121 2.5-2.5v-6c0-1.379-1.121-2.5-2.5-2.5ZM9 8c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V8Zm9 10.5c0 .275-.225.5-.5.5h-11a.501.501 0 0 1-.5-.5v-6c0-.275.225-.5.5-.5h11c.275 0 .5.225.5.5v6Z'
      />
    </svg>
  );
};
export default IconLock;
