import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconLightBulb: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M15 22H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.44 1-1 1Zm0-3H9c-.55 0-1-.45-1-1v-1.57c-2.45-1.42-4-4.07-4-6.93 0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.86-1.55 5.51-4 6.93V18c0 .55-.44 1-1 1Zm-5-2h4v-1.17c0-.39.22-.74.57-.9A6.026 6.026 0 0 0 18 9.5c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.3 1.35 4.43 3.43 5.42.35.17.57.52.57.9V17Z'
      />
    </svg>
  );
};
export default IconLightBulb;
