import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconThumbDownFilled: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M6 3h-.4c-.684 0-1.354.277-1.838.762A2.62 2.62 0 0 0 3 5.6v5.6c0 .684.277 1.354.761 1.837A2.616 2.616 0 0 0 5.6 13.8H6V3Zm14.971 9.408-1.103-7.197A2.603 2.603 0 0 0 17.304 3H8v12l2.286 5.406A1 1 0 0 0 11.2 21c.908 0 1.162-.354 1.806-.997.64-.643.994-1.496.994-2.403v-2.2h4.374a2.39 2.39 0 0 0 1.092-.229 2.613 2.613 0 0 0 1.432-1.647 2.63 2.63 0 0 0 .073-1.116Z'
      />
    </svg>
  );
};
export default IconThumbDownFilled;
