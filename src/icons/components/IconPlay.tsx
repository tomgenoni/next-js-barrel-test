import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconPlay: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M19.5369 11.1563C19.8253 11.3399 20 11.6581 20 12C20 12.3419 19.8253 12.6601 19.5369 12.8437L8.53688 19.8437C8.22895 20.0396 7.83874 20.0522 7.51879 19.8766C7.19885 19.701 7 19.365 7 19L7 5C7 4.63502 7.19885 4.29903 7.51879 4.12339C7.83874 3.94776 8.22895 3.96039 8.53688 4.15634L19.5369 11.1563Z'
        fill='currentColor'
      />
    </svg>
  );
};
export default IconPlay;
