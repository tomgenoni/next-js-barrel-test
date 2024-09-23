import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconChevronUp: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M2.5 15.62c0-.26.1-.51.29-.71l8.5-8.5a.996.996 0 0 1 1.41 0l8.5 8.5a.996.996 0 1 1-1.41 1.41L12 8.54l-7.8 7.79a.996.996 0 0 1-1.41 0c-.19-.2-.29-.45-.29-.71Z'
      />
    </svg>
  );
};
export default IconChevronUp;
