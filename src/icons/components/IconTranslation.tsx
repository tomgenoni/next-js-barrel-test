import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconTranslation: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='m21.94 20.65-3.68-10c-.15-.39-.53-.65-.94-.65h-1.05c-.42 0-.79.26-.94.65l-1.04 2.83a16.28 16.28 0 0 1-3.66-2.2c1.61-1.79 2.32-3.6 2.62-4.78h1.91c.55 0 1-.45 1-1s-.45-1-1-1h-5.08V3c0-.55-.45-1-1-1s-1 .45-1 1v1.5H2.97c-.55 0-1 .45-1 1s.45 1 1 1H5.1c.31 1.18 1.02 2.99 2.62 4.78-2.43 1.96-4.96 2.7-4.99 2.71-.53.15-.84.7-.69 1.23a.993.993 0 0 0 1.23.69c.13-.04 3.09-.88 5.91-3.23 1.62 1.35 3.29 2.2 4.42 2.69l-1.95 5.29c-.19.52.07 1.09.59 1.28a.993.993 0 0 0 1.28-.59l1.12-3.03h4.31l1.12 3.03c.14.4.52.65.93.65.12 0 .23-.02.35-.06.51-.19.78-.77.59-1.29ZM11.16 6.5c-.3.93-.88 2.16-1.99 3.41-1.1-1.25-1.68-2.48-1.99-3.41h3.98Zm4.21 9.82 1.42-3.85 1.42 3.85h-2.84Z'
      />
    </svg>
  );
};
export default IconTranslation;
