import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconRedo: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M22.33 9.92a.973.973 0 0 0-.71-.29 1 1 0 0 0-.71.3l-.99 1.01a8.746 8.746 0 0 0-8.68-7.7C6.42 3.25 2.5 7.17 2.5 12s3.92 8.75 8.75 8.75c2.34 0 4.53-.91 6.19-2.56a.99.99 0 0 0 .29-.71.99.99 0 0 0-1-1c-.27 0-.52.1-.71.29a6.736 6.736 0 0 1-4.77 1.98c-3.72 0-6.75-3.03-6.75-6.75s3.03-6.75 6.75-6.75c3.35 0 6.15 2.46 6.66 5.7l-1.05-1.02c-.39-.38-1.03-.38-1.42.02-.38.39-.37 1.03.02 1.41l2.79 2.71c.38.37 1.04.36 1.41-.02l2.68-2.73a.99.99 0 0 0 .29-.71c0-.25-.1-.5-.3-.69Z'
      />
    </svg>
  );
};
export default IconRedo;
