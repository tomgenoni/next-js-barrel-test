import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconInfo: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 9.15c.64 0 1.15-.51 1.15-1.15 0-.64-.51-1.15-1.15-1.15-.64 0-1.15.51-1.15 1.15 0 .64.51 1.15 1.15 1.15Zm0 8.35c-.55 0-1-.45-1-1V12c0-.55.45-1 1-1s1 .45 1 1v4.5c0 .55-.45 1-1 1Z'
      />
      <path
        fill='currentColor'
        d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10Zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8Z'
      />
    </svg>
  );
};
export default IconInfo;
