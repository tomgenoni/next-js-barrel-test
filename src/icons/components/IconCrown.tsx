import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCrown: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 4a1 1 0 0 1 .864.496l3.065 5.255 4.2-1.68a1 1 0 0 1 1.357 1.093l-1.5 9A1 1 0 0 1 19 19H5a1 1 0 0 1-.986-.836l-1.5-9A1 1 0 0 1 3.87 8.072l4.2 1.68 3.065-5.256A1 1 0 0 1 12 4Zm0 2.985-2.636 4.519a1 1 0 0 1-1.235.425l-3.35-1.34L5.847 17h12.306l1.069-6.412-3.35 1.34a1 1 0 0 1-1.236-.424L12 6.984Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconCrown;
