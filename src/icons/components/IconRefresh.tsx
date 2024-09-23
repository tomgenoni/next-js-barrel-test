import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconRefresh: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='m4.04 11.93 3.29-1.2c.52-.19.79-.76.6-1.28a.998.998 0 0 0-1.28-.6l-1.08.39A7 7 0 0 1 12 5c2.93 0 5.57 1.85 6.58 4.6.19.52.76.78 1.28.6.52-.19.79-.76.6-1.28C19.16 5.38 15.77 3 12 3 8.41 3 5.22 5.12 3.79 8.31l-.35-.96a.998.998 0 0 0-1.28-.6c-.52.19-.79.76-.6 1.28l1.2 3.29c.15.41.53.66.94.66.11.01.23-.01.34-.05Zm18.39 4.02-1.2-3.29a.998.998 0 0 0-1.28-.6l-3.29 1.2c-.52.19-.79.76-.6 1.28.19.52.77.79 1.28.6l1.09-.4A6.982 6.982 0 0 1 12 19a7.01 7.01 0 0 1-6.58-4.61.998.998 0 0 0-1.28-.6c-.52.19-.79.76-.6 1.28A9.028 9.028 0 0 0 12 21c3.59 0 6.78-2.12 8.21-5.3l.34.93a.998.998 0 0 0 1.28.6c.52-.19.79-.76.6-1.28Z'
      />
    </svg>
  );
};
export default IconRefresh;
