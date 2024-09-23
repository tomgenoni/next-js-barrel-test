import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconEnvelope: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M20.5 5h-17c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1Zm-1.65 2L12 12.24 5.15 7h13.7ZM4.5 17V9.02l6.89 5.27c.18.14.39.21.61.21.22 0 .43-.07.61-.21l6.89-5.27V17h-15Z'
      />
    </svg>
  );
};
export default IconEnvelope;
