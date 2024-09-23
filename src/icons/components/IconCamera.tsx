import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCamera: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M19 20.5H5c-1.93 0-3.5-1.57-3.5-3.5V9.5C1.5 7.57 3.07 6 5 6h1.934l1.209-2.015A.999.999 0 0 1 9 3.5h6c.352 0 .677.184.857.485L17.066 6H19c1.93 0 3.5 1.57 3.5 3.5V17c0 1.93-1.57 3.5-3.5 3.5ZM5 8c-.827 0-1.5.673-1.5 1.5V17c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.5c0-.827-.673-1.5-1.5-1.5h-2.5a.997.997 0 0 1-.857-.485L14.434 5.5H9.566L8.357 7.515A.999.999 0 0 1 7.5 8H5Z'
      />
      <path
        fill='currentColor'
        d='M12.001 17.25a4.504 4.504 0 0 1-4.498-4.5c0-2.481 2.018-4.5 4.498-4.5a4.503 4.503 0 0 1 4.495 4.5c0 2.481-2.017 4.5-4.495 4.5Zm0-7a2.502 2.502 0 0 0-2.498 2.5c0 1.379 1.121 2.5 2.498 2.5a2.5 2.5 0 0 0 0-5Z'
      />
    </svg>
  );
};
export default IconCamera;
