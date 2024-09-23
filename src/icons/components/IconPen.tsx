import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconPen: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.28 4.72003C18.11 3.55003 16.21 3.55003 15.04 4.72003L5.14002 14.62C5.03002 14.73 4.95002 14.86 4.90002 15.01L3.49002 19.26C3.37002 19.62 3.46002 20.01 3.73002 20.28C3.92002 20.47 4.18002 20.57 4.44002 20.57C4.55002 20.57 4.65002 20.55 4.76002 20.52L9.00002 19.1C9.15002 19.05 9.28002 18.97 9.39002 18.86L19.29 8.96003C20.45 7.79003 20.45 5.89003 19.28 4.72003ZM17.86 7.55003L8.13002 17.28L6.71002 17.75L6.24002 17.28L6.71002 15.86L16.44 6.13003C16.83 5.74003 17.47 5.74003 17.86 6.13003C18.25 6.53003 18.25 7.16003 17.86 7.55003Z'
        fill='currentColor'
      />
    </svg>
  );
};
export default IconPen;
