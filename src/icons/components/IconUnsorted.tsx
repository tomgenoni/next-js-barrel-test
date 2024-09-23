import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconUnsorted: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M21.207 15.21a.999.999 0 0 0-1.414 0l-2.376 2.376V4a1 1 0 1 0-2 0v13.586l-2.376-2.376a1 1 0 1 0-1.415 1.414l4.083 4.083a1.001 1.001 0 0 0 1.415 0l4.083-4.083a.999.999 0 0 0 0-1.414Zm-8.833-6.419a.999.999 0 0 0 0-1.414L8.291 3.293a1 1 0 0 0-1.415 0L2.793 7.376A.999.999 0 1 0 4.207 8.79l2.376-2.376V20a1 1 0 1 0 2 0V6.415l2.376 2.376c.391.39 1.024.39 1.415 0Z'
      />
    </svg>
  );
};
export default IconUnsorted;
