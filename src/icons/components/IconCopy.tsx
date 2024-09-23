import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCopy: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='m21.205 7.556-5.291-5.265A.995.995 0 0 0 15.209 2h-6.5a1 1 0 0 0-1 1v2.235h2V4h4.503v4.265a1 1 0 0 0 1 1H19.5v5.5h-1.209v2H20.5a1 1 0 0 0 1-1v-7.5a.998.998 0 0 0-.295-.709Zm-4.993-2.147 1.865 1.856h-1.865V5.409Z'
      />
      <path
        fill='currentColor'
        d='m15.996 12.791-5.291-5.265A1 1 0 0 0 10 7.235H3.5a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h11.791a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-.295-.709Zm-4.993-2.147 1.865 1.856h-1.865v-1.856ZM4.5 20V9.235h4.503V13.5a1 1 0 0 0 1 1h4.288V20H4.5Z'
      />
    </svg>
  );
};
export default IconCopy;
