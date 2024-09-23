import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconSave: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M19.5 21h-15c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v2h13v-2c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1Z'
      />
      <path
        fill='currentColor'
        d='M12 16.5c-.25 0-.48-.09-.65-.24-.01-.01-.02-.01-.02-.02l-6.05-5.5a.997.997 0 1 1 1.34-1.48L11 13.24V4c0-.55.45-1 1-1s1 .45 1 1v9.23l4.38-3.97a.997.997 0 1 1 1.34 1.48l-5.98 5.43c-.18.2-.44.33-.74.33Z'
      />
    </svg>
  );
};
export default IconSave;
