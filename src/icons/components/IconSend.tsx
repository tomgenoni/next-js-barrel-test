import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconSend: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M3 21.5c-.24 0-.48-.09-.67-.25-.3-.27-.41-.69-.28-1.07L4.88 12 2.05 3.83A1.002 1.002 0 0 1 3.43 2.6l17.94 8.5c.35.17.57.52.57.9s-.22.74-.57.9L3.43 21.4c-.14.07-.28.1-.43.1ZM6.65 13l-1.93 5.58L18.6 12 4.72 5.42 6.65 11h5.29c.55 0 1 .45 1 1s-.45 1-1 1H6.65Z'
      />
    </svg>
  );
};
export default IconSend;
