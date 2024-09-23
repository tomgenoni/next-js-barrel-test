import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconBook: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M16.5 2.5c-1.858 0-3.504.758-4.5 1.916C11.004 3.258 9.358 2.5 7.5 2.5 4.467 2.5 2 4.519 2 7v12.356a1.495 1.495 0 0 0 2.591 1.021c.66-.703 1.747-1.123 2.908-1.123 1.385 0 2.646.595 3.211 1.517a1.506 1.506 0 0 0 2.579 0c.565-.922 1.826-1.517 3.211-1.517 1.161 0 2.249.42 2.908 1.123a1.49 1.49 0 0 0 1.648.371c.574-.227.944-.772.944-1.392V7c0-2.481-2.468-4.5-5.5-4.5Zm-9 14.754c-1.303 0-2.528.363-3.5 1.02V7c0-1.355 1.603-2.5 3.5-2.5S11 5.645 11 7v11.279c-.965-.65-2.188-1.025-3.5-1.025ZM20 18.272c-.973-.655-2.197-1.019-3.5-1.019-1.311 0-2.535.375-3.5 1.025V7c0-1.355 1.603-2.5 3.5-2.5S20 5.645 20 7v11.272Z'
      />
    </svg>
  );
};
export default IconBook;
