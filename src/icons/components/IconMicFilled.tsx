import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconMicFilled: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M15.293 5.543A3.297 3.297 0 0 0 12 2.25a3.297 3.297 0 0 0-3.293 3.293v6.366A3.297 3.297 0 0 0 12 15.202a3.298 3.298 0 0 0 3.293-3.293V5.543Z'
      />
      <path
        fill='currentColor'
        d='M18.775 12.139v-1.3a1 1 0 1 0-2 0v1.3a4.48 4.48 0 0 1-4.475 4.474h-.29l-.01-.002-.01.002h-.291a4.48 4.48 0 0 1-4.475-4.474v-1.3a1 1 0 1 0-2 0v1.3c0 3.333 2.533 6.085 5.775 6.435V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1.426c3.242-.35 5.775-3.101 5.775-6.435Z'
      />
    </svg>
  );
};
export default IconMicFilled;
