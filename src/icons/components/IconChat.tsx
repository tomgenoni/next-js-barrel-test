import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconChat: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M7.5 20c-.12 0-.24-.02-.35-.06-.39-.15-.65-.52-.65-.94v-3h-1C3.57 16 2 14.43 2 12.5v-7C2 3.57 3.57 2 5.5 2h9C16.43 2 18 3.57 18 5.5v7c0 1.93-1.57 3.5-3.5 3.5h-3.05l-3.2 3.66c-.19.22-.47.34-.75.34Zm-2-16C4.67 4 4 4.67 4 5.5v7c0 .83.67 1.5 1.5 1.5h2c.55 0 1 .45 1 1v1.34l1.75-2A.98.98 0 0 1 11 14h3.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-9Z'
      />
      <path
        fill='currentColor'
        d='M6.75 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm3.25 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm3.25 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM20 12v6h-2c-.43 0-.79.27-.94.65l-.36-.36A.99.99 0 0 0 16 18h-3.64l-.7.79c.31.71 1.02 1.21 1.84 1.21h2.09l1.71 1.71c.18.19.44.29.7.29.13 0 .26-.02.38-.08.38-.15.62-.52.62-.92v-1h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2Z'
      />
    </svg>
  );
};
export default IconChat;
