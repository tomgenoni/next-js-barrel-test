import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconRestricted: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 17.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm0-3.25c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1Z'
      />
      <path
        fill='currentColor'
        d='M21.16 16.01 14.6 4.54a3 3 0 0 0-4.09-1.12c-.46.27-.85.66-1.11 1.12L2.84 16.01c-.4.7-.5 1.5-.29 2.28.21.77.71 1.42 1.41 1.82.45.26.97.4 1.49.4h13.11c1.65 0 3-1.35 3-3-.01-.53-.14-1.05-.4-1.5Zm-2.61 2.49H5.45c-.17 0-.35-.05-.5-.13a.998.998 0 0 1-.47-.61.963.963 0 0 1 .1-.76l6.55-11.47a.996.996 0 0 1 1.73 0L19.42 17c.09.15.13.32.13.5 0 .55-.44 1-1 1Z'
      />
    </svg>
  );
};
export default IconRestricted;
