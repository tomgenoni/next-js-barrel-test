import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconShareAndroid: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M16.5 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 6a3.5 3.5 0 1 1 1.143 2.587l-4.251 2.546a3.507 3.507 0 0 1 0 1.734l4.246 2.55a3.5 3.5 0 1 1-1.03 1.715l-4.245-2.55a3.5 3.5 0 1 1 0-5.164l4.247-2.544A3.508 3.508 0 0 1 13 6Zm-6.5 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm10 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconShareAndroid;
