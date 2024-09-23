import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCheckmark: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M20.614 4.211a1 1 0 0 1 .175 1.403L10.607 18.691a1 1 0 0 1-1.496.093l-5.818-5.819a1 1 0 1 1 1.414-1.414l5.018 5.018L19.21 4.386a1 1 0 0 1 1.403-.175Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconCheckmark;
