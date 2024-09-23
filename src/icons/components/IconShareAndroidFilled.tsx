import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconShareAndroidFilled: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M17 15.375a3.1 3.1 0 0 0-2.047.783l-5.891-3.539a3.154 3.154 0 0 0 0-1.242l5.895-3.532a3.1 3.1 0 0 0 2.043.78A3.129 3.129 0 0 0 20.125 5.5 3.129 3.129 0 0 0 17 2.375a3.129 3.129 0 0 0-3.062 3.749L8.044 9.655A3.1 3.1 0 0 0 6 8.875 3.129 3.129 0 0 0 2.875 12 3.129 3.129 0 0 0 6 15.125a3.1 3.1 0 0 0 2.047-.783l5.891 3.539A3.129 3.129 0 0 0 17 21.625a3.129 3.129 0 0 0 3.125-3.125A3.129 3.129 0 0 0 17 15.375Z'
      />
    </svg>
  );
};
export default IconShareAndroidFilled;
