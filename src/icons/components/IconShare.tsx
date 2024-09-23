import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconShare: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        fillRule='evenodd'
        d='M22 12a1 1 0 0 1-.366.774l-9.778 8A1 1 0 0 1 10.222 20v-4.64c-.548-.118-1.362-.112-2.523.124-1.594.324-3.01.797-4.256 1.413a1 1 0 0 1-1.318-1.382c1.148-2.07 2.389-3.687 3.743-4.79 1.19-.97 2.65-1.684 4.354-2.166V4a1 1 0 0 1 1.634-.774l9.778 8A1 1 0 0 1 22 12Zm-2.579 0-7.199-5.89v3.223a1 1 0 0 1-.772.974c-1.816.423-3.24 1.09-4.318 1.968-.54.44-1.079 1-1.617 1.688a22.513 22.513 0 0 1 1.786-.44c1.728-.35 3.267-.357 4.403.267a1 1 0 0 1 .518.877v3.223L19.421 12Z'
        clipRule='evenodd'
      />
    </svg>
  );
};
export default IconShare;
