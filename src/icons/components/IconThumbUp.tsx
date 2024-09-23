import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconThumbUp: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        fillRule='evenodd'
        d='M10.286 3.594A1 1 0 0 1 11.2 3a3.4 3.4 0 0 1 3.4 3.4v2.2h3.523a2.6 2.6 0 0 1 2.594 2.99l-1.104 7.2A2.601 2.601 0 0 1 17.019 21H5.6A2.6 2.6 0 0 1 3 18.4v-5.6a2.6 2.6 0 0 1 2.6-2.6h1.75l2.936-6.606ZM7 12.2H5.6a.6.6 0 0 0-.6.6v5.6a.6.6 0 0 0 .6.6H7v-6.8ZM9 19h8.035a.6.6 0 0 0 .6-.51l1.104-7.2a.602.602 0 0 0-.6-.69H13.6a1 1 0 0 1-1-1V6.4a1.4 1.4 0 0 0-.808-1.27L9 11.413V19Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconThumbUp;
