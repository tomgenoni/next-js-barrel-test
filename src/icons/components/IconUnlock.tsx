import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconUnlock: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M17.44 10H9V7.89c0-.71.27-1.39.77-1.92.51-.54 1.2-.88 1.96-.95.76-.07 1.51.12 2.13.56.6.43 1.02 1.05 1.16 1.75.11.54.65.89 1.18.77.54-.11.89-.64.77-1.19a4.893 4.893 0 0 0-1.96-2.97c-1-.71-2.24-1.04-3.48-.92A5.13 5.13 0 0 0 8.31 4.6C7.46 5.5 7 6.67 7 7.89V10h-.44C5.15 10 4 11.18 4 12.64v5.73C4 19.82 5.15 21 6.56 21h10.89c1.41 0 2.56-1.18 2.56-2.64v-5.73C20 11.18 18.85 10 17.44 10Zm.56 8.36c0 .35-.25.64-.56.64H6.56c-.31 0-.56-.29-.56-.64v-5.73c0-.34.25-.63.56-.63h10.89c.31 0 .56.29.56.64v5.72H18Z'
      />
    </svg>
  );
};
export default IconUnlock;
