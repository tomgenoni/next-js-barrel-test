import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconGenericUserFilled: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 14.25c-3.91 0-7.1 2.89-7.25 6.5V21h14.49v-.25c-.14-3.61-3.33-6.5-7.24-6.5Zm0-1a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z'
      />
    </svg>
  );
};
export default IconGenericUserFilled;
