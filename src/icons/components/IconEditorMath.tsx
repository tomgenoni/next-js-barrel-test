import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconEditorMath: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M17.14 21H6.86c-.36 0-.69-.19-.86-.5a.993.993 0 0 1 0-1l4.29-7.5-4.3-7.5a.993.993 0 0 1 0-1c.18-.31.51-.5.87-.5h10.29c.55 0 1 .45 1 1s-.45 1-1 1H8.58l3.72 6.5c.18.31.18.68 0 .99L8.58 19h8.56c.55 0 1 .45 1 1s-.44 1-1 1Z'
      />
    </svg>
  );
};
export default IconEditorMath;
