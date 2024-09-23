import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconMuted: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 4c3.382 0 5.933 2.534 5.933 5.895 0 1.355.209 2.643.498 3.779l2.123 1.873c.236.208.594-.036.478-.329-.523-1.32-1.1-3.248-1.1-5.324C19.933 5.394 16.522 2 12 2c-1.903 0-3.605.607-4.943 1.638l1.547 1.365C9.554 4.366 10.717 4 12 4Zm9.161 14.75-17-15a1 1 0 1 0-1.322 1.5l1.808 1.595a8.155 8.155 0 0 0-.58 3.05c0 2.745-.998 5.221-1.594 6.452a1.492 1.492 0 0 0 .079 1.451c.276.439.752.702 1.272.702h4.132C8.252 20.476 9.943 22 12 22c2.057 0 3.748-1.524 4.043-3.5h1.812l1.983 1.75a.996.996 0 0 0 1.411-.089.998.998 0 0 0-.088-1.411ZM12 20a2.099 2.099 0 0 1-2.005-1.5h4.011A2.101 2.101 0 0 1 12 20Zm-7.397-3.5c.654-1.517 1.465-3.935 1.465-6.605 0-.562.081-1.096.218-1.604L15.59 16.5H4.603Z'
      />
    </svg>
  );
};
export default IconMuted;
