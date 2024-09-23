import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconImageCopy: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12.75 9.25c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Z'
      />
      <path
        fill='currentColor'
        d='M14.5 6h-9C3.57 6 2 7.57 2 9.5v9C2 20.43 3.57 22 5.5 22h9c1.93 0 3.5-1.57 3.5-3.5v-9C18 7.57 16.43 6 14.5 6ZM16 18.5c0 .827-.673 1.5-1.5 1.5h-9c-.827 0-1.5-.673-1.5-1.5v-1.586c1.194-.906 2.265-1.491 2.492-1.491.191.028.895.591 1.135.782.783.625 1.523 1.217 2.373 1.217.693 0 1.419-.291 2.128-.574.475-.189 1.066-.426 1.372-.426.333 0 1.428.479 2.5 1.078v1ZM5.5 8h9c.827 0 1.5.673 1.5 1.5v5.742c-.851-.418-1.835-.82-2.5-.82-.693 0-1.419.291-2.128.574-.475.189-1.066.426-1.364.426-.191-.028-.895-.591-1.135-.782-.783-.626-1.523-1.218-2.373-1.218-.688 0-1.645.497-2.5 1.047V9.5C4 8.673 4.673 8 5.5 8Z'
      />
      <path
        fill='currentColor'
        d='M9.5 2h9C20.43 2 22 3.57 22 5.5v9a3.474 3.474 0 0 1-2 3.145V5.5c0-.827-.673-1.5-1.5-1.5H6.349A3.489 3.489 0 0 1 9.5 2Z'
      />
    </svg>
  );
};
export default IconImageCopy;
