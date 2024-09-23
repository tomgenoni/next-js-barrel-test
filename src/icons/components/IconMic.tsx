import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconMic: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 15.452a3.548 3.548 0 0 0 3.543-3.543V5.543A3.547 3.547 0 0 0 12 2a3.547 3.547 0 0 0-3.543 3.543v6.366A3.547 3.547 0 0 0 12 15.452Zm-1.543-9.909C10.457 4.692 11.149 4 12 4s1.543.692 1.543 1.543v6.366c0 .851-.692 1.543-1.543 1.543a1.545 1.545 0 0 1-1.543-1.543V5.543Z'
      />
      <path
        fill='currentColor'
        d='M18.775 12.139v-1.3a1 1 0 1 0-2 0v1.3a4.479 4.479 0 0 1-4.474 4.474h-.291l-.01-.002-.01.002h-.292a4.479 4.479 0 0 1-4.474-4.474v-1.3a1 1 0 0 0-2 0v1.3c0 3.334 2.533 6.085 5.775 6.435V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1.426c3.242-.35 5.775-3.101 5.775-6.435Z'
      />
    </svg>
  );
};
export default IconMic;
