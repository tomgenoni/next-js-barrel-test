import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconTextInputLTR: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M4 5H6.75V10.5C6.75 11.052 7.197 11.5 7.75 11.5C8.303 11.5 8.75 11.052 8.75 10.5V5H11.5C12.052 5 12.5 4.553 12.5 4C12.5 3.447 12.052 3 11.5 3H4C3.448 3 3 3.447 3 4C3 4.553 3.448 5 4 5Z'
        fill='currentColor'
      />
      <path
        d='M15.5 5H20C20.553 5 21 4.552 21 4C21 3.448 20.553 3 20 3H15.5C14.947 3 14.5 3.448 14.5 4C14.5 4.552 14.947 5 15.5 5Z'
        fill='currentColor'
      />
      <path
        d='M20 13.667H4C3.447 13.667 3 14.114 3 14.667C3 15.22 3.447 15.667 4 15.667H20C20.553 15.667 21 15.22 21 14.667C21 14.114 20.553 13.667 20 13.667Z'
        fill='currentColor'
      />
      <path
        d='M20 19H4C3.447 19 3 19.447 3 20C3 20.553 3.447 21 4 21H20C20.553 21 21 20.553 21 20C21 19.447 20.553 19 20 19Z'
        fill='currentColor'
      />
      <path
        d='M20 8.33301H15.5C14.947 8.33301 14.5 8.78101 14.5 9.33301C14.5 9.88501 14.947 10.333 15.5 10.333H20C20.553 10.333 21 9.88501 21 9.33301C21 8.78101 20.553 8.33301 20 8.33301Z'
        fill='currentColor'
      />
    </svg>
  );
};
export default IconTextInputLTR;
