import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconFile: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M19 21.5H5a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1h8a.995.995 0 0 1 .675.262l.032.031 6 6 .031.032.001.001A1 1 0 0 1 20 9.5v11a1 1 0 0 1-1 1Zm-13-2h12v-9h-5a1 1 0 0 1-1-1v-5H6v15Zm8-11h2.586L14 5.914V8.5Z'
      />
    </svg>
  );
};
export default IconFile;
