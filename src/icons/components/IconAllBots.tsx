import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconAllBots: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M18.351 7.886a.9.9 0 0 1-.9-.9V6.37a.9.9 0 0 1 1.8 0v.615a.9.9 0 0 1-.9.901Zm-2.702 0a.9.9 0 0 1-.9-.9V6.37a.9.9 0 0 1 1.8 0v.615a.9.9 0 0 1-.9.901Z'
      />
      <path
        fill='currentColor'
        d='M17 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Zm0 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3ZM7 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm0-8C5.346 4 4 5.346 4 7s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Zm1.351 13.886a.9.9 0 0 1-.9-.9v-.616a.9.9 0 0 1 1.8 0v.615a.9.9 0 0 1-.9.901Zm-2.702 0a.9.9 0 0 1-.9-.9v-.616a.9.9 0 0 1 1.8 0v.615a.9.9 0 0 1-.9.901Z'
      />
      <path
        fill='currentColor'
        d='M7 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Z'
      />
    </svg>
  );
};
export default IconAllBots;
