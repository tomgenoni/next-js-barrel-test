import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconBan: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M12 4C7.58128 4 4 7.58128 4 12C4 13.8493 4.62638 15.5508 5.67993 16.9059L16.9059 5.67993C15.5508 4.62638 13.8493 4 12 4ZM18.3201 7.09415L7.09415 18.3201C8.44917 19.3736 10.1507 20 12 20C16.4187 20 20 16.4187 20 12C20 10.1507 19.3736 8.44917 18.3201 7.09415ZM4.92877 19.0712C3.12024 17.2627 2 14.7613 2 12C2 6.47672 6.47672 2 12 2C14.7613 2 17.2627 3.12024 19.0712 4.92877C20.8798 6.7373 22 9.23868 22 12C22 17.5233 17.5233 22 12 22C9.23868 22 6.7373 20.8798 4.92877 19.0712Z'
      />
    </svg>
  );
};
export default IconBan;
