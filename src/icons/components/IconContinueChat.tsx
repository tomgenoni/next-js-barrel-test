import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconContinueChat: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M20 3.5a1 1 0 0 0-1 1v15a1 1 0 1 0 2 0v-15a1 1 0 0 0-1-1Zm-2.803 7.789-7.49-7.496a1.001 1.001 0 0 0-1.415 1.415l5.792 5.796H3.5a1 1 0 0 0 0 2h10.583l-5.79 5.79a.999.999 0 1 0 1.414 1.413l7.49-7.49a.994.994 0 0 0 0-1.428Z'
      />
    </svg>
  );
};
export default IconContinueChat;
