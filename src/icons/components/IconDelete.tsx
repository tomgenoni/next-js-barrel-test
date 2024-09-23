import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconDelete: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M20.5 6h-4.12v-.5c0-1.65-1.35-3-3-3h-2.5c-1.65 0-3 1.35-3 3V6H3.5c-.55 0-1 .45-1 1s.45 1 1 1h1.88v10.5c0 1.65 1.35 3 3 3h7.25c1.62 0 2.97-1.32 3-2.96V8h1.88c.55 0 1-.45 1-1s-.46-1-1.01-1ZM9.88 5.5c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1V6h-4.5v-.5Zm6.74 13.02c-.01.54-.46.98-1 .98H8.38c-.55 0-1-.45-1-1V8h9.25v10.52h-.01Z'
      />
      <path
        fill='currentColor'
        d='M10.25 10.5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1Zm3.5 0c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1Z'
      />
    </svg>
  );
};
export default IconDelete;
