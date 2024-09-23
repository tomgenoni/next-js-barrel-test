import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconTextInputRTL: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M20 5H17.25V10.5C17.25 11.052 16.803 11.5 16.25 11.5C15.697 11.5 15.25 11.052 15.25 10.5V5H12.5C11.948 5 11.5 4.553 11.5 4C11.5 3.447 11.948 3 12.5 3H20C20.552 3 21 3.447 21 4C21 4.553 20.552 5 20 5Z'
        fill='currentColor'
      />
      <path
        d='M8.5 5H4C3.447 5 3 4.552 3 4C3 3.448 3.447 3 4 3H8.5C9.053 3 9.5 3.448 9.5 4C9.5 4.552 9.053 5 8.5 5Z'
        fill='currentColor'
      />
      <path
        d='M4 13.667H20C20.553 13.667 21 14.114 21 14.667C21 15.22 20.553 15.667 20 15.667H4C3.447 15.667 3 15.22 3 14.667C3 14.114 3.447 13.667 4 13.667Z'
        fill='currentColor'
      />
      <path
        d='M4 19H20C20.553 19 21 19.447 21 20C21 20.553 20.553 21 20 21H4C3.447 21 3 20.553 3 20C3 19.447 3.447 19 4 19Z'
        fill='currentColor'
      />
      <path
        d='M4 8.33301H8.5C9.053 8.33301 9.5 8.78101 9.5 9.33301C9.5 9.88501 9.053 10.333 8.5 10.333H4C3.447 10.333 3 9.88501 3 9.33301C3 8.78101 3.447 8.33301 4 8.33301Z'
        fill='currentColor'
      />
    </svg>
  );
};
export default IconTextInputRTL;
