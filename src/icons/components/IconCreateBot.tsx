import React from 'react';
import { getInlineIconStyles, ICON_SIZE, IconTypes } from '../iconHelpers';

const IconCreateBot: React.FC<IconTypes> = ({ size = 'lg', className }) => {
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
        d='M13.561 12.412a1 1 0 0 1-1-1V10a1 1 0 1 1 2 0v1.412a1 1 0 0 1-1 1Zm-4.707 0a1 1 0 0 1-1-1V10a1 1 0 0 1 2 0v1.412a1 1 0 0 1-1 1Zm2.368 4.774a5.285 5.285 0 0 1-4.23-2.093 1 1 0 1 1 1.589-1.214 3.301 3.301 0 0 0 2.641 1.308 3.298 3.298 0 0 0 2.64-1.308 1.001 1.001 0 0 1 1.59 1.214 5.286 5.286 0 0 1-4.23 2.093ZM21.944 18.5h-1.5V17a1 1 0 1 0-2 0v1.5h-1.5a1 1 0 1 0 0 2h1.5V22a1 1 0 1 0 2 0v-1.5h1.5a1 1 0 1 0 0-2Z'
      />
      <path
        fill='currentColor'
        d='M18.443 10.808v3.369c.314-.112.65-.177 1.001-.177.351 0 .686.065.999.177v-3.369c0-4.813-3.878-8.308-9.222-8.308C5.877 2.5 2 5.994 2 10.808V20.5a1 1 0 1 0 2 0v-9.692C4 7.094 6.97 4.5 11.222 4.5c4.252 0 7.221 2.594 7.221 6.308Z'
      />
    </svg>
  );
};
export default IconCreateBot;
